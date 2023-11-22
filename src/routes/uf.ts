import { Router, Request, Response } from "express";
import controller from "../controllers/UfController";

const routes = Router();

routes.get("/sigla", controller.listByUf);
routes.get("/ibge", controller.listByIbge);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;
