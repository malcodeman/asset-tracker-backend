import express from "express";
import cors from "cors";

import authRoutes from "./features/auth/authRoutes";
import workspacesRoutes from "./features/workspaces/workspacesRoutes";

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

export default app;
