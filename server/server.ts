import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

const app = express();
const PORT = 3000;

try {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'planner_schema'
    });

    const [results, fields] = await connection.execute(
        'SELECT * FROM '
    );
} catch (error) {
    
}

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.json({ message: "Server Updated4" });
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})