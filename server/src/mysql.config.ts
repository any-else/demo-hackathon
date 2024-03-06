import mysql2 from "mysql2";

export const connection = () => {
  try {
    const createConnection = mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "vuvanbui@18",
      database: "hackathon",
      port: 3306,
    });

    if (createConnection) {
      console.log("connection successful");
    }
    return createConnection;
  } catch (error) {
    throw new Error(error as any);
  }
};
