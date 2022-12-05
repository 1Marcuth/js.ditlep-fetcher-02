import { Router } from "express";

import fogIslandController from "../../controllers/islands/fog-island.js"

const fogIslandRouter = Router();

fogIslandRouter.get("/", fogIslandController.index);

export default fogIslandRouter;