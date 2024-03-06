import express from "express";
import RootRoute from "./routers";
import { connection } from "./mysql.config";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

/** middleware application */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
/** router */
RootRoute(app);

/** init server */
app.listen(8080, () => {
  console.log("server is running at http://localhost:8080");
});
