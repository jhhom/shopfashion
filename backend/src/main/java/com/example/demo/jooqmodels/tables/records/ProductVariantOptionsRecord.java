/*
 * This file is generated by jOOQ.
 */
package com.example.demo.jooqmodels.tables.records;


import com.example.demo.jooqmodels.tables.ProductVariantOptions;

import java.time.LocalDateTime;

import org.jooq.Record1;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes", "this-escape" })
public class ProductVariantOptionsRecord extends UpdatableRecordImpl<ProductVariantOptionsRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>public.product_variant_options.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.product_variant_options.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for
     * <code>public.product_variant_options.product_variant_id</code>.
     */
    public void setProductVariantId(Integer value) {
        set(1, value);
    }

    /**
     * Getter for
     * <code>public.product_variant_options.product_variant_id</code>.
     */
    public Integer getProductVariantId() {
        return (Integer) get(1);
    }

    /**
     * Setter for
     * <code>public.product_variant_options.product_option_value_id</code>.
     */
    public void setProductOptionValueId(Integer value) {
        set(2, value);
    }

    /**
     * Getter for
     * <code>public.product_variant_options.product_option_value_id</code>.
     */
    public Integer getProductOptionValueId() {
        return (Integer) get(2);
    }

    /**
     * Setter for <code>public.product_variant_options.updated_at</code>.
     */
    public void setUpdatedAt(LocalDateTime value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.product_variant_options.updated_at</code>.
     */
    public LocalDateTime getUpdatedAt() {
        return (LocalDateTime) get(3);
    }

    /**
     * Setter for <code>public.product_variant_options.created_at</code>.
     */
    public void setCreatedAt(LocalDateTime value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.product_variant_options.created_at</code>.
     */
    public LocalDateTime getCreatedAt() {
        return (LocalDateTime) get(4);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached ProductVariantOptionsRecord
     */
    public ProductVariantOptionsRecord() {
        super(ProductVariantOptions.PRODUCT_VARIANT_OPTIONS);
    }

    /**
     * Create a detached, initialised ProductVariantOptionsRecord
     */
    public ProductVariantOptionsRecord(Integer id, Integer productVariantId, Integer productOptionValueId, LocalDateTime updatedAt, LocalDateTime createdAt) {
        super(ProductVariantOptions.PRODUCT_VARIANT_OPTIONS);

        setId(id);
        setProductVariantId(productVariantId);
        setProductOptionValueId(productOptionValueId);
        setUpdatedAt(updatedAt);
        setCreatedAt(createdAt);
        resetChangedOnNotNull();
    }
}
