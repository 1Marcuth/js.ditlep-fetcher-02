import { Router } from "express";

import towerIslandController from "../../controllers/islands/tower-island.js"

const towerIslandRouter = Router();

towerIslandRouter.get("/", towerIslandController.index);

export default towerIslandRouter;