import express from "express";
import cors from "cors";
import authRoutes from "./routes/jwtAuth.js"; 


const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);



app.listen(5000, () => console.log("Server is running on port 5000"));
