import mysql from "mysql2";

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud_node_express_mysql",
});

export default connection.promise();