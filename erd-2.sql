

CREATE TABLE IF NOT EXISTS admins
(
    id SERIAL PRIMARY KEY,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT admins_pkey PRIMARY KEY (id),
    CONSTRAINT admins_email_key UNIQUE (email),
    CONSTRAINT admins_username_key UNIQUE (username)
);

CREATE TABLE IF NOT EXISTS customer_cart_configurable_items
(
    customer_id integer NOT NULL,
    product_variant_id integer NOT NULL,
    quantity integer NOT NULL DEFAULT 0,
    added_at timestamp without time zone NOT NULL,
    CONSTRAINT customer_cart_configurable_items_pkey PRIMARY KEY (customer_id, product_variant_id)
);

CREATE TABLE IF NOT EXISTS customer_cart_simple_items
(
    customer_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL DEFAULT 0,
    added_at timestamp without time zone NOT NULL,
    CONSTRAINT customer_cart_simple_items_pkey PRIMARY KEY (customer_id, product_id)
);

CREATE TABLE IF NOT EXISTS customers
(
    id SERIAL PRIMARY KEY,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT customers_pkey PRIMARY KEY (id),
    CONSTRAINT customers_email_key UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS order_line_configurable_items
(
    order_id integer NOT NULL,
    product_variant_id integer NOT NULL,
    quantity integer NOT NULL,
    unit_price numeric(10, 2) NOT NULL DEFAULT 0.00,
    order_line_item_status order_line_item_status NOT NULL DEFAULT 'PROCESSING'::order_line_item_status
);

CREATE TABLE IF NOT EXISTS order_line_simple_items
(
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    unit_price numeric(10, 2) NOT NULL DEFAULT 0.00,
    order_line_item_status order_line_item_status NOT NULL DEFAULT 'PROCESSING'::order_line_item_status
);

CREATE TABLE IF NOT EXISTS orders
(
    id SERIAL PRIMARY KEY,
    customer_id integer NOT NULL,
    shipping_fee numeric(10, 2) NOT NULL DEFAULT 0.00,
    total_price numeric(10, 2) NOT NULL DEFAULT 0.00,
    order_status order_status NOT NULL DEFAULT 'PENDING_PAYMENT'::order_status,
    delivery_address jsonb NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT orders_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product_association_types
(
    id SERIAL PRIMARY KEY,
    type_name text NOT NULL DEFAULT ''::text,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_association_types_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product_associations
(
    product_association_type_id integer NOT NULL,
    product_id integer NOT NULL,
    CONSTRAINT product_associations_pkey PRIMARY KEY (product_association_type_id, product_id)
);

CREATE TABLE IF NOT EXISTS product_configurable_options
(
    id SERIAL PRIMARY KEY,
    product_id integer NOT NULL,
    product_option_code character varying(255) NOT NULL,
    CONSTRAINT product_configurable_options_pkey PRIMARY KEY (id),
    CONSTRAINT product_configurable_options_product_id_product_option_code_key UNIQUE (product_id, product_option_code)
);

CREATE TABLE IF NOT EXISTS product_option_values
(
    id SERIAL PRIMARY KEY,
    option_code character varying(255) NOT NULL,
    option_value text NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_option_values_pkey PRIMARY KEY (id),
    CONSTRAINT product_option_values_option_code_option_value_key UNIQUE (option_code, option_value)
);

CREATE TABLE IF NOT EXISTS product_options
(
    code character varying(255) NOT NULL,
    option_name text NOT NULL,
    "position" integer NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_options_pkey PRIMARY KEY (code),
    CONSTRAINT product_options_position_key UNIQUE ("position")
);

CREATE TABLE IF NOT EXISTS product_reviews
(
    order_id integer NOT NULL,
    product_id integer NOT NULL,
    comment text NOT NULL DEFAULT ''::text,
    rating integer NOT NULL DEFAULT 0,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_reviews_pkey PRIMARY KEY (order_id, product_id)
);

CREATE TABLE IF NOT EXISTS product_taxons
(
    id SERIAL PRIMARY KEY,
    product_id integer NOT NULL,
    taxon_id integer NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_taxons_pkey PRIMARY KEY (id),
    CONSTRAINT product_taxons_product_id_taxon_id_key UNIQUE (product_id, taxon_id)
);

CREATE TABLE IF NOT EXISTS product_variant_options
(
    id SERIAL PRIMARY KEY,
    product_variant_id integer NOT NULL,
    product_option_value_id integer NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_variant_options_pkey PRIMARY KEY (id),
    CONSTRAINT product_variant_options_product_variant_id_product_option_v_key UNIQUE (product_variant_id, product_option_value_id)
);

CREATE TABLE IF NOT EXISTS product_variants
(
    id SERIAL PRIMARY KEY,
    pricing numeric(10, 2) NOT NULL DEFAULT 0.00,
    variant_name text NOT NULL,
    product_id integer NOT NULL,
    "position" integer NOT NULL,
    product_status product_status NOT NULL DEFAULT 'ACTIVE'::product_status,
    product_variant_image_url text,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT product_variants_pkey PRIMARY KEY (id),
    CONSTRAINT product_variants_product_id_position_key UNIQUE (product_id, "position"),
    CONSTRAINT product_variants_product_id_variant_name_key UNIQUE (product_id, variant_name)
);

CREATE TABLE IF NOT EXISTS products
(
    id SERIAL PRIMARY KEY,
    pricing numeric(10, 2) NOT NULL DEFAULT 0.00,
    product_name text NOT NULL,
    product_description text NOT NULL DEFAULT ''::text,
    product_type product_type NOT NULL DEFAULT 'SIMPLE'::product_type,
    taxon_id integer NOT NULL,
    product_status product_status NOT NULL DEFAULT 'ACTIVE'::product_status,
    product_image_url text,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT products_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS taxons
(
    id SERIAL PRIMARY KEY,
    parent_id integer,
    taxon_name text NOT NULL,
    slug text NOT NULL,
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    CONSTRAINT taxons_pkey PRIMARY KEY (id),
    CONSTRAINT taxons_parent_id_slug_key UNIQUE (parent_id, slug),
    CONSTRAINT taxons_parent_id_taxon_name_key UNIQUE (parent_id, taxon_name)
);

