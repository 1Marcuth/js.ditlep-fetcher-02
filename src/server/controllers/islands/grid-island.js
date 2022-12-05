import { Router } from "express";

import gridIslandController from "../../controllers/islands/grid-island.js"

const gridIslandRouter = Router();

gridIslandRouter.get("/", gridIslandController.index);

export default gridIslandRouter;