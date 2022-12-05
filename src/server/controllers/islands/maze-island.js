import { Router } from "express";

import mazeIslandController from "../../controllers/islands/maze-island.js"

const mazeIslandRouter = Router();

mazeIslandRouter.get("/", mazeIslandController.index);

export default mazeIslandRouter;