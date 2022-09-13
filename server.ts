import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";

const app: Express = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at port ${process.env.PORT}`);
});

/*const middleware = (req, res , next) => {

}¨*/

app.get("/", /*middleware,*/(req: Request, res: Response) => {
res.send("TITO TE QUIERO <3")   
})

interface User{
  name: string
  lastname: string
}
const Users: User[] = [{name: "agustin", lastname: "sanchez"}]

app.post("/", (req: Request<any, any, User>, res) => {
 Users.push(req.body)
 res.send(JSON.stringify({data: Users}))
})

connectToDb()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

async function connectToDb() {
  if (process.env.DB_CONNECTION_STRING) {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } else {
    console.log("Connection string is missing");
  }
}
