/*
 * This file is generated by jOOQ.
 */
package com.example.demo.jooqmodels.tables;


import com.example.demo.jooqmodels.Keys;
import com.example.demo.jooqmodels.Public;
import com.example.demo.jooqmodels.enums.OrderLineItemStatus;
import com.example.demo.jooqmodels.tables.Orders.OrdersPath;
import com.example.demo.jooqmodels.tables.ProductVariants.ProductVariantsPath;
import com.example.demo.jooqmodels.tables.records.OrderLineConfigurableItemsRecord;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.jooq.Condition;
import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.InverseForeignKey;
import org.jooq.Name;
import org.jooq.Path;
import org.jooq.PlainSQL;
import org.jooq.QueryPart;
import org.jooq.Record;
import org.jooq.SQL;
import org.jooq.Schema;
import org.jooq.Select;
import org.jooq.Stringly;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes", "this-escape" })
public class OrderLineConfigurableItems extends TableImpl<OrderLineConfigurableItemsRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of
     * <code>public.order_line_configurable_items</code>
     */
    public static final OrderLineConfigurableItems ORDER_LINE_CONFIGURABLE_ITEMS = new OrderLineConfigurableItems();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<OrderLineConfigurableItemsRecord> getRecordType() {
        return OrderLineConfigurableItemsRecord.class;
    }

    /**
     * The column <code>public.order_line_configurable_items.order_id</code>.
     */
    public final TableField<OrderLineConfigurableItemsRecord, Integer> ORDER_ID = createField(DSL.name("order_id"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column
     * <code>public.order_line_configurable_items.product_variant_id</code>.
     */
    public final TableField<OrderLineConfigurableItemsRecord, Integer> PRODUCT_VARIANT_ID = createField(DSL.name("product_variant_id"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>public.order_line_configurable_items.quantity</code>.
     */
    public final TableField<OrderLineConfigurableItemsRecord, Integer> QUANTITY = createField(DSL.name("quantity"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>public.order_line_configurable_items.unit_price</code>.
     */
    public final TableField<OrderLineConfigurableItemsRecord, BigDecimal> UNIT_PRICE = createField(DSL.name("unit_price"), SQLDataType.NUMERIC(10, 2).nullable(false).defaultValue(DSL.field(DSL.raw("0.00"), SQLDataType.NUMERIC)), this, "");

    /**
     * The column
     * <code>public.order_line_configurable_items.order_line_item_status</code>.
     */
    public final TableField<OrderLineConfigurableItemsRecord, OrderLineItemStatus> ORDER_LINE_ITEM_STATUS = createField(DSL.name("order_line_item_status"), SQLDataType.VARCHAR.nullable(false).defaultValue(DSL.field(DSL.raw("'PROCESSING'::order_line_item_status"), SQLDataType.VARCHAR)).asEnumDataType(OrderLineItemStatus.class), this, "");

    private OrderLineConfigurableItems(Name alias, Table<OrderLineConfigurableItemsRecord> aliased) {
        this(alias, aliased, (Field<?>[]) null, null);
    }

    private OrderLineConfigurableItems(Name alias, Table<OrderLineConfigurableItemsRecord> aliased, Field<?>[] parameters, Condition where) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table(), where);
    }

    /**
     * Create an aliased <code>public.order_line_configurable_items</code> table
     * reference
     */
    public OrderLineConfigurableItems(String alias) {
        this(DSL.name(alias), ORDER_LINE_CONFIGURABLE_ITEMS);
    }

    /**
     * Create an aliased <code>public.order_line_configurable_items</code> table
     * reference
     */
    public OrderLineConfigurableItems(Name alias) {
        this(alias, ORDER_LINE_CONFIGURABLE_ITEMS);
    }

    /**
     * Create a <code>public.order_line_configurable_items</code> table
     * reference
     */
    public OrderLineConfigurableItems() {
        this(DSL.name("order_line_configurable_items"), null);
    }

    public <O extends Record> OrderLineConfigurableItems(Table<O> path, ForeignKey<O, OrderLineConfigurableItemsRecord> childPath, InverseForeignKey<O, OrderLineConfigurableItemsRecord> parentPath) {
        super(path, childPath, parentPath, ORDER_LINE_CONFIGURABLE_ITEMS);
    }

    /**
     * A subtype implementing {@link Path} for simplified path-based joins.
     */
    public static class OrderLineConfigurableItemsPath extends OrderLineConfigurableItems implements Path<OrderLineConfigurableItemsRecord> {
        public <O extends Record> OrderLineConfigurableItemsPath(Table<O> path, ForeignKey<O, OrderLineConfigurableItemsRecord> childPath, InverseForeignKey<O, OrderLineConfigurableItemsRecord> parentPath) {
            super(path, childPath, parentPath);
        }
        private OrderLineConfigurableItemsPath(Name alias, Table<OrderLineConfigurableItemsRecord> aliased) {
            super(alias, aliased);
        }

        @Override
        public OrderLineConfigurableItemsPath as(String alias) {
            return new OrderLineConfigurableItemsPath(DSL.name(alias), this);
        }

        @Override
        public OrderLineConfigurableItemsPath as(Name alias) {
            return new OrderLineConfigurableItemsPath(alias, this);
        }

        @Override
        public OrderLineConfigurableItemsPath as(Table<?> alias) {
            return new OrderLineConfigurableItemsPath(alias.getQualifiedName(), this);
        }
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Public.PUBLIC;
    }

    @Override
    public List<ForeignKey<OrderLineConfigurableItemsRecord, ?>> getReferences() {
        return Arrays.asList(Keys.ORDER_LINE_CONFIGURABLE_ITEMS__ORDER_LINE_CONFIGURABLE_ITEMS_ORDER_ID_FKEY, Keys.ORDER_LINE_CONFIGURABLE_ITEMS__ORDER_LINE_CONFIGURABLE_ITEMS_PRODUCT_VARIANT_ID_FKEY);
    }

    private transient OrdersPath _orders;

    /**
     * Get the implicit join path to the <code>public.orders</code> table.
     */
    public OrdersPath orders() {
        if (_orders == null)
            _orders = new OrdersPath(this, Keys.ORDER_LINE_CONFIGURABLE_ITEMS__ORDER_LINE_CONFIGURABLE_ITEMS_ORDER_ID_FKEY, null);

        return _orders;
    }

    private transient ProductVariantsPath _productVariants;

    /**
     * Get the implicit join path to the <code>public.product_variants</code>
     * table.
     */
    public ProductVariantsPath productVariants() {
        if (_productVariants == null)
            _productVariants = new ProductVariantsPath(this, Keys.ORDER_LINE_CONFIGURABLE_ITEMS__ORDER_LINE_CONFIGURABLE_ITEMS_PRODUCT_VARIANT_ID_FKEY, null);

        return _productVariants;
    }

    @Override
    public OrderLineConfigurableItems as(String alias) {
        return new OrderLineConfigurableItems(DSL.name(alias), this);
    }

    @Override
    public OrderLineConfigurableItems as(Name alias) {
        return new OrderLineConfigurableItems(alias, this);
    }

    @Override
    public OrderLineConfigurableItems as(Table<?> alias) {
        return new OrderLineConfigurableItems(alias.getQualifiedName(), this);
    }

    /**
     * Rename this table
     */
    @Override
    public OrderLineConfigurableItems rename(String name) {
        return new OrderLineConfigurableItems(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public OrderLineConfigurableItems rename(Name name) {
        return new OrderLineConfigurableItems(name, null);
    }

    /**
     * Rename this table
     */
    @Override
    public OrderLineConfigurableItems rename(Table<?> name) {
        return new OrderLineConfigurableItems(name.getQualifiedName(), null);
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public OrderLineConfigurableItems where(Condition condition) {
        return new OrderLineConfigurableItems(getQualifiedName(), aliased() ? this : null, null, condition);
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public OrderLineConfigurableItems where(Collection<? extends Condition> conditions) {
        return where(DSL.and(conditions));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public OrderLineConfigurableItems where(Condition... conditions) {
        return where(DSL.and(conditions));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public OrderLineConfigurableItems where(Field<Boolean> condition) {
        return where(DSL.condition(condition));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public OrderLineConfigurableItems where(SQL condition) {
        return where(DSL.condition(condition));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public OrderLineConfigurableItems where(@Stringly.SQL String condition) {
        return where(DSL.condition(condition));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public OrderLineConfigurableItems where(@Stringly.SQL String condition, Object... binds) {
        return where(DSL.condition(condition, binds));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public OrderLineConfigurableItems where(@Stringly.SQL String condition, QueryPart... parts) {
        return where(DSL.condition(condition, parts));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public OrderLineConfigurableItems whereExists(Select<?> select) {
        return where(DSL.exists(select));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public OrderLineConfigurableItems whereNotExists(Select<?> select) {
        return where(DSL.notExists(select));
    }
}
