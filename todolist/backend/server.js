const express = require("express");
const app = express();
const db = require("./db/tasks");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/tasks", async (req, res) => {
  const results = await db.createTask(req.body);
  res.status(201).json({ id: results[0] });
});
app.get("/tasks", async (req, res) => {
  const tasks = await db.getAllTasks();
  res.status(200).json({ tasks });
});
app.patch("/tasks/:id", async (req, res) => {
  const id = await db.updateTask(req.params.id, req.body);
  res.status(200).json({ id: req.params.id });
});

app.delete("/tasks/:id", async (req, res) => {
  await db.deleteTask(req.params.id);
  res.status(200).json({ success: true });
});

app.listen(1337, () => {
  console.log("Server is listenning on port 1337 ");
});
// app.get("/test", (req, res) => {
//   res.status(200).json({ success: true });
// });
