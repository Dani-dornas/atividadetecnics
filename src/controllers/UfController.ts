import { Request, Response } from "express";
import ufs from "./dados";

class UfController {
  listByUf(req: Request, res: Response) {
    const sigla = req.params.sigla.toUpperCase();
    const uf = ufs.find((uf) => uf.uf === sigla);
    res.json(uf ? uf : { error: `Sigla ${sigla} não encontrada` });
  }

  listByIbge(req: Request, res: Response) {
    const ibge = parseInt(req.params.ibge);
    const uf = ufs.find((uf) => uf.ibge === ibge);
    res.json(uf ? uf : { error: "UF não encontrada" });
  }
}

export default new UfController();
