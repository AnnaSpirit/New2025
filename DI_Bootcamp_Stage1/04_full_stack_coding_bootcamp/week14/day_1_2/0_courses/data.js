import knex from 'knex';

const PGPORT = 5432;
const PGDATABASE = 'neondb';
const PGHOST = 'ep-shiny-lake-a9om6c0e-pooler.gwc.azure.neon.tech';
const PGUSER = 'neondb_owner';
const PGPASSWORD = 'npg_Cjn2Pypo1rVk';

const db = knex({
    client: "pg",
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: { rejectUnauthorized: false },
    },
});

// try {
//     const result = await db.raw("select * from products");
//     console.log(result.rows);
// } catch (error) {
//     console.log(error);
// }

// try {
//     const result = await db.raw("select * from products where price > 100");
//     console.log(result.rows);
// } catch (error) {
//     console.log(error);
// }

// try {
//     const result = await db.raw("insert into products (name, price) values (?,?) returning *", ["ipad15", 1200]
//     );
//     console.log(result.rows);
// } catch (error) {
//     console.log(error);
// }

try {
    // const rows = await db
    //   .select("id", "name", "price")
    //   .from("products")
    //   .where({ id: 2 });
    const rows = await db("products").insert({ name: "iPhone15", price: 444 }, [
        "id",
        "name",
        "price",
    ]);
    console.log(rows);
} catch (error) {
    console.log(error);
}