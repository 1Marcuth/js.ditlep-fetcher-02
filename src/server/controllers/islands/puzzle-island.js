import { Router } from "express";

import puzzleIslandController from "../../controllers/islands/puzzle-island.js"

const puzzleIslandRouter = Router();

puzzleIslandRouter.get("/", puzzleIslandController.index);

export default puzzleIslandRouter;