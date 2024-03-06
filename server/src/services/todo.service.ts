import { connection } from "./../mysql.config";

class TodoService {
  private db: any;
  constructor() {
    this.db = connection();
  }

  /** create */
  async createTodo(todo: any) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "INSERT INTO tasks SET ?",
        todo,
        (err: Error, result: any) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }
  /** get all */
  async getAllTodo() {
    return new Promise((resolve, reject) => {
      this.db.query("SELECT * FROM tasks", (err: Error, result: any) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }
  /** get theo id */
  async getTodoById(id: string) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "SELECT * FROM tasks WHERE id = ?",
        id,
        (err: Error, result: any) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }
  /** update */
  async updateTodo(data: any, id: string) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "UPDATE tasks SET ? WHERE id = ?",
        [{ ...data }, id],
        (err: Error, result: any) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }
  /** delete */
  async deleteTodo(id: string) {
    return new Promise((resolve, reject) => {
      this.db.query(
        "DELETE FROM tasks WHERE id = ?",
        id,
        (error: Error, result: any) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  }
}

export const todoService = new TodoService();
