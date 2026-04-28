import { createConnection } from "mysql2"
import "dotenv/config"

const db = createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SENHA_SQL,
  database: "banco_pizzaria"
})

export default db