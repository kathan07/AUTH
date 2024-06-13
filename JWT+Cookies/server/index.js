import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth.route.js";
const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT;
const mongo = process.env.MONGO;


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo);
}


app.use("/auth",auth);



app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})