import { createConnection } from "mysql2"
import "dotenv/config"

export default db = createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SENHA_SQL,
  database: "banco-pizzaria"
})