/*
 * This file is generated by jOOQ.
 */
package com.example.demo.jooqmodels.tables;


import com.example.demo.jooqmodels.Keys;
import com.example.demo.jooqmodels.Public;
import com.example.demo.jooqmodels.tables.records.KnexMigrationsRecord;

import java.time.OffsetDateTime;
import java.util.Collection;

import org.jooq.Condition;
import org.jooq.Field;
import org.jooq.Identity;
import org.jooq.Name;
import org.jooq.PlainSQL;
import org.jooq.QueryPart;
import org.jooq.SQL;
import org.jooq.Schema;
import org.jooq.Select;
import org.jooq.Stringly;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes", "this-escape" })
public class KnexMigrations extends TableImpl<KnexMigrationsRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>public.knex_migrations</code>
     */
    public static final KnexMigrations KNEX_MIGRATIONS = new KnexMigrations();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<KnexMigrationsRecord> getRecordType() {
        return KnexMigrationsRecord.class;
    }

    /**
     * The column <code>public.knex_migrations.id</code>.
     */
    public final TableField<KnexMigrationsRecord, Integer> ID = createField(DSL.name("id"), SQLDataType.INTEGER.nullable(false).identity(true), this, "");

    /**
     * The column <code>public.knex_migrations.name</code>.
     */
    public final TableField<KnexMigrationsRecord, String> NAME = createField(DSL.name("name"), SQLDataType.VARCHAR(255), this, "");

    /**
     * The column <code>public.knex_migrations.batch</code>.
     */
    public final TableField<KnexMigrationsRecord, Integer> BATCH = createField(DSL.name("batch"), SQLDataType.INTEGER, this, "");

    /**
     * The column <code>public.knex_migrations.migration_time</code>.
     */
    public final TableField<KnexMigrationsRecord, OffsetDateTime> MIGRATION_TIME = createField(DSL.name("migration_time"), SQLDataType.TIMESTAMPWITHTIMEZONE(6), this, "");

    private KnexMigrations(Name alias, Table<KnexMigrationsRecord> aliased) {
        this(alias, aliased, (Field<?>[]) null, null);
    }

    private KnexMigrations(Name alias, Table<KnexMigrationsRecord> aliased, Field<?>[] parameters, Condition where) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table(), where);
    }

    /**
     * Create an aliased <code>public.knex_migrations</code> table reference
     */
    public KnexMigrations(String alias) {
        this(DSL.name(alias), KNEX_MIGRATIONS);
    }

    /**
     * Create an aliased <code>public.knex_migrations</code> table reference
     */
    public KnexMigrations(Name alias) {
        this(alias, KNEX_MIGRATIONS);
    }

    /**
     * Create a <code>public.knex_migrations</code> table reference
     */
    public KnexMigrations() {
        this(DSL.name("knex_migrations"), null);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Public.PUBLIC;
    }

    @Override
    public Identity<KnexMigrationsRecord, Integer> getIdentity() {
        return (Identity<KnexMigrationsRecord, Integer>) super.getIdentity();
    }

    @Override
    public UniqueKey<KnexMigrationsRecord> getPrimaryKey() {
        return Keys.KNEX_MIGRATIONS_PKEY;
    }

    @Override
    public KnexMigrations as(String alias) {
        return new KnexMigrations(DSL.name(alias), this);
    }

    @Override
    public KnexMigrations as(Name alias) {
        return new KnexMigrations(alias, this);
    }

    @Override
    public KnexMigrations as(Table<?> alias) {
        return new KnexMigrations(alias.getQualifiedName(), this);
    }

    /**
     * Rename this table
     */
    @Override
    public KnexMigrations rename(String name) {
        return new KnexMigrations(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public KnexMigrations rename(Name name) {
        return new KnexMigrations(name, null);
    }

    /**
     * Rename this table
     */
    @Override
    public KnexMigrations rename(Table<?> name) {
        return new KnexMigrations(name.getQualifiedName(), null);
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public KnexMigrations where(Condition condition) {
        return new KnexMigrations(getQualifiedName(), aliased() ? this : null, null, condition);
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public KnexMigrations where(Collection<? extends Condition> conditions) {
        return where(DSL.and(conditions));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public KnexMigrations where(Condition... conditions) {
        return where(DSL.and(conditions));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public KnexMigrations where(Field<Boolean> condition) {
        return where(DSL.condition(condition));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public KnexMigrations where(SQL condition) {
        return where(DSL.condition(condition));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public KnexMigrations where(@Stringly.SQL String condition) {
        return where(DSL.condition(condition));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public KnexMigrations where(@Stringly.SQL String condition, Object... binds) {
        return where(DSL.condition(condition, binds));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    @PlainSQL
    public KnexMigrations where(@Stringly.SQL String condition, QueryPart... parts) {
        return where(DSL.condition(condition, parts));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public KnexMigrations whereExists(Select<?> select) {
        return where(DSL.exists(select));
    }

    /**
     * Create an inline derived table from this table
     */
    @Override
    public KnexMigrations whereNotExists(Select<?> select) {
        return where(DSL.notExists(select));
    }
}
