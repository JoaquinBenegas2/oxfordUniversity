import mysql from "mysql2/promise"

const mysqlConnection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "oxforddb",
});

mysqlConnection.config.namedPlaceholders = true;

export default mysqlConnection;
