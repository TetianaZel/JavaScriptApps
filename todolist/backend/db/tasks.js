const knex = require("./knex");

function createTask(task) {
  return knex("tasks").insert(task);
}
function getAllTasks() {
  return knex("tasks").select("*");
}
function deleteTask(id) {
  return knex("tasks").where("id", id).del();
}
function updateTask(id, task) {
  let result = knex("tasks").where("id", id).update(task);
  console.log("update task id = " + result);
  return result;
}

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
};
