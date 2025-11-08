import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import trackRoutes from "./routes/track.js";
import visitorRoutes from "./routes/visitor.js";
import statsRoutes from "./routes/stats.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => { console.error("MongoDB connection error:", err); process.exit(1); });

app.use("/api/track", trackRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/admin", adminRoutes);

app.get("/health", (_, res) => res.json({ ok: true, ts: Date.now() }));

export default app;
