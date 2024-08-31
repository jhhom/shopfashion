CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

 
CREATE TABLE taxons (
    id SERIAL PRIMARY KEY,
    parent_id INT REFERENCES taxons(id),
    taxon_name TEXT NOT NULL,
    slug TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    UNIQUE(parent_id, taxon_name),
    UNIQUE(parent_id, slug)
);

CREATE TYPE product_type AS ENUM('SIMPLE', 'CONFIGURABLE');

CREATE TYPE product_status AS ENUM('ACTIVE', 'ARCHIVED', 'OUT_OF_STOCK');

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    pricing NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    product_name TEXT NOT NULL,
    product_description TEXT DEFAULT '' NOT NULL,
    product_type product_type DEFAULT 'SIMPLE' NOT NULL,
    taxon_id INT REFERENCES taxons(id) NOT NULL,
    product_status product_status DEFAULT 'ACTIVE' NOT NULL,
    product_image_url TEXT,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE product_taxons (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) NOT NULL,
    taxon_id INT REFERENCES taxons(id) NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    UNIQUE(product_id, taxon_id)
);

CREATE TABLE product_options (
    code VARCHAR(255) UNIQUE PRIMARY KEY,
    option_name TEXT NOT NULL,
    position INT UNIQUE NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE product_option_values (
    id SERIAL PRIMARY KEY,
    option_code VARCHAR(255) REFERENCES product_options(code) NOT NULL,
    option_value TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    UNIQUE(option_code, option_value)
);

CREATE TABLE product_variants (
    id SERIAL PRIMARY KEY,
    pricing NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    variant_name TEXT NOT NULL,
    product_id INT REFERENCES products(id) NOT NULL,
    position INT NOT NULL,
    product_status product_status DEFAULT 'ACTIVE' NOT NULL,
    product_variant_image_url TEXT,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    UNIQUE(product_id, position),
    UNIQUE(product_id, variant_name)
);

CREATE TABLE product_configurable_options (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id) NOT NULL,
    product_option_code VARCHAR(255) REFERENCES product_options(code) NOT NULL,
    UNIQUE(product_id, product_option_code)
);

CREATE TABLE product_variant_options (
    id SERIAL PRIMARY KEY,
    product_variant_id INT REFERENCES product_variants(id) NOT NULL,
    product_option_value_id INT REFERENCES product_option_values(id) NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    UNIQUE(product_variant_id, product_option_value_id)
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE customer_cart_simple_items (
customer_id INT REFERENCES customers(id) NOT NULL,
product_id INT REFERENCES products(id) NOT NULL,
quantity INT DEFAULT 0 NOT NULL,
added_at TIMESTAMP NOT NULL,
PRIMARY KEY(customer_id, product_id)
);

CREATE TABLE customer_cart_configurable_items (
customer_id INT REFERENCES customers(id) NOT NULL,
product_variant_id INT REFERENCES product_variants(id) NOT NULL,
quantity INT DEFAULT 0 NOT NULL,
added_at TIMESTAMP NOT NULL,
PRIMARY KEY(customer_id, product_variant_id)
);

CREATE TYPE order_status AS ENUM('PENDING_PAYMENT', 'PAID', 'CANCELLED');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) NOT NULL,
    shipping_fee NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    total_price NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    order_status order_status DEFAULT 'PENDING_PAYMENT' NOT NULL,
    delivery_address JSONB NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TYPE order_line_item_status AS ENUM('PROCESSING', 'TO_SHIP', 'TO_RECEIVE', 'COMPLETED');

CREATE TABLE order_line_simple_items (
    order_id INT REFERENCES orders(id) NOT NULL,
    product_id INT REFERENCES products(id) NOT NULL,
    quantity INT NOT NULL,
    unit_price NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    order_line_item_status order_line_item_status DEFAULT 'PROCESSING' NOT NULL
);

CREATE TABLE order_line_configurable_items (
    order_id INT REFERENCES orders(id) NOT NULL,
    product_variant_id INT REFERENCES product_variants(id) NOT NULL,
    quantity INT NOT NULL,
    unit_price NUMERIC(10, 2) DEFAULT 0.00 NOT NULL,
    order_line_item_status order_line_item_status DEFAULT 'PROCESSING' NOT NULL
);

CREATE TABLE product_reviews (
    order_id INT REFERENCES orders(id) NOT NULL,
    product_id INT REFERENCES products(id) NOT NULL,
    comment TEXT DEFAULT '' NOT NULL,
    rating INT DEFAULT 0 NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    PRIMARY KEY (order_id, product_id)
);

CREATE TABLE product_association_types (
id SERIAL PRIMARY KEY,
    type_name TEXT DEFAULT '' NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
CREATE TABLE product_associations (
product_association_type_id INT REFERENCES product_association_types(id) NOT NULL,
product_id INT REFERENCES products(id) NOT NULL,
PRIMARY KEY (product_association_type_id, product_id)
);