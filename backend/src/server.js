import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import rateLimiter from "./middleware/rateLimiter.js";
import stacksRoutes from "./routes/stacksRoutes.js";
import pythonExpRoutes from "./routes/pythonExpRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js"
import tablesRoutes from "./routes/tablesRoutes.js"
import {connectDB} from "./config/db.js";
import path from "path";

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express(); 
const PORT = process.env.PORT;
const __dirname = path.resolve();


//Middleware
if(process.env.NODE_ENV !== "production"){
  app.use(cors({origin: "http://localhost:5173"})
);
}


app.use(express.json());
app.use(rateLimiter);

app.use("/api/stacks", stacksRoutes);
app.use("/api/python-skills", pythonExpRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/tables", tablesRoutes);

if(process.env.NODE_ENV === "production" ){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
  });
}

connectDB().then(()=> {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  })
})