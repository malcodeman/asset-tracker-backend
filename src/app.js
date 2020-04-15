import express from "express";
import cors from "cors";

import authRoutes from "./features/auth/authRoutes";
import workspacesRoutes from "./features/workspaces/workspacesRoutes";
import assetsRoutes from "./features/assets/assetsRoutes";
import usersRoutes from "./features/users/usersRoutes";

const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/workspaces", workspacesRoutes);
app.use("/assets", assetsRoutes);
app.use("/users", usersRoutes);

export default app;
