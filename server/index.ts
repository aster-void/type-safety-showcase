import express, { type Request, type Response } from "express";
import type { Endpoints } from "../types/endpoints";

const app = express();
app.use(express.json());

app.post(
  "/",
  (req: Request<any, any, Endpoints["/"]["POST"]["request"]>, res: Response<Endpoints["/"]["POST"]["response"]>) => {
    const json = req.body;
    console.log("server got", json satisfies { message: "ping" });
    res.json({ message: "pong" });
  },
);

app.listen(3000);
