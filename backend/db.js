
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  password: "abood123",
  host: "localhost",
  port: 5432,
  database: "DB1",
});

// pool.query("SELECT NOW()", (err, res) => {
//   if (err) {
//     console.error("Database connection error:", err);
//   } else {
//     console.log("Database connection successful:", res.rows[0]);
//   }
// });
pool.query("select * from users", (req, res) => {
  console.log(res.rows);
});
export default pool;
