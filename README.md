# Reproduction repo for the `kysely-org/kysely/issues/1571`

Cloudflare D1's table access blocking behavior breaks `db.introspection.getTables()` method.

The reserved table name `_cf_METADATA` in the Cloudflare D1 SQLite databases is access-prohibited and throws an internal authorization failure with the code [(23) SQLITE_AUTH](https://www.sqlite.org/rescode.html#auth) on access attempts.

**Original Issue**: https://github.com/kysely-org/kysely/issues/1571

## Reproduction Steps (Short One)

1. Clone [this repo](https://github.com/xkema/kysely-org-kysely-issues-1571) `git clone git@github.com:xkema/kysely-org-kysely-issues-1571.git` and go to the project root.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:8787/ (or the link printed out in the terminal in the previous step)
5. Review the error.
6. Comment out the `const table_metadata = await db.introspection.getTables();` line in the [./src/index.ts](./src/index.ts) module and reload the page.
7. See the working "**Hello World!**" page.
8. FIN!
