import { Express } from "express";
import { todoController } from "../controllers/todo.controller";
export const todoRoute = (app: Express) => {
  /** create */
  app.post("/api/v1/tasks", todoController.createTodo);

  /** get all */
  app.get("/api/v1/tasks", todoController.getAll);

  /** get theo id */
  app.get("/api/v1/task/:id", todoController.getOne);

  /** update */
  app.put("/api/v1/task/:id", todoController.updateTodo);

  /** delete */
  app.delete("/api/v1/task/:id", todoController.deleteTodo);
};
