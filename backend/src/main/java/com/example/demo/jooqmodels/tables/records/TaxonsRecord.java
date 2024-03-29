/*
 * This file is generated by jOOQ.
 */
package com.example.demo.jooqmodels.tables.records;


import com.example.demo.jooqmodels.tables.Taxons;

import java.time.LocalDateTime;

import org.jooq.Record1;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes", "this-escape" })
public class TaxonsRecord extends UpdatableRecordImpl<TaxonsRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * Setter for <code>public.taxons.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>public.taxons.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>public.taxons.parent_id</code>.
     */
    public void setParentId(Integer value) {
        set(1, value);
    }

    /**
     * Getter for <code>public.taxons.parent_id</code>.
     */
    public Integer getParentId() {
        return (Integer) get(1);
    }

    /**
     * Setter for <code>public.taxons.taxon_name</code>.
     */
    public void setTaxonName(String value) {
        set(2, value);
    }

    /**
     * Getter for <code>public.taxons.taxon_name</code>.
     */
    public String getTaxonName() {
        return (String) get(2);
    }

    /**
     * Setter for <code>public.taxons.slug</code>.
     */
    public void setSlug(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>public.taxons.slug</code>.
     */
    public String getSlug() {
        return (String) get(3);
    }

    /**
     * Setter for <code>public.taxons.updated_at</code>.
     */
    public void setUpdatedAt(LocalDateTime value) {
        set(4, value);
    }

    /**
     * Getter for <code>public.taxons.updated_at</code>.
     */
    public LocalDateTime getUpdatedAt() {
        return (LocalDateTime) get(4);
    }

    /**
     * Setter for <code>public.taxons.created_at</code>.
     */
    public void setCreatedAt(LocalDateTime value) {
        set(5, value);
    }

    /**
     * Getter for <code>public.taxons.created_at</code>.
     */
    public LocalDateTime getCreatedAt() {
        return (LocalDateTime) get(5);
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
     * Create a detached TaxonsRecord
     */
    public TaxonsRecord() {
        super(Taxons.TAXONS);
    }

    /**
     * Create a detached, initialised TaxonsRecord
     */
    public TaxonsRecord(Integer id, Integer parentId, String taxonName, String slug, LocalDateTime updatedAt, LocalDateTime createdAt) {
        super(Taxons.TAXONS);

        setId(id);
        setParentId(parentId);
        setTaxonName(taxonName);
        setSlug(slug);
        setUpdatedAt(updatedAt);
        setCreatedAt(createdAt);
        resetChangedOnNotNull();
    }
}
