import express from "express";
import cors from "cors";
import postgres from "postgres";
// import dotenv from "dotenv";

// dotenv.config();

const sql = postgres({database: "tasktime"});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  sql`SELECT * FROM tasks`.then((rows) => {
    res.send(rows);
  });
});

app.post("/api/tasks", (req, res) => {
  const { description } = req.body;
  sql `INSERT INTO tasks (description) VALUES (${description}) RETURNING *`.then(
      (result) => {
          res.send(result[0])
      }
  )
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
