import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import swaggerDoc from "./swagger.json";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello " + req.body.a);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.listen(3000, () => {
  console.log("Listem on port 3000...");
});
