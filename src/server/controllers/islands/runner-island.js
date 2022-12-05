import { Router } from "express";

import runnerIslandController from "../../controllers/islands/runner-island.js"

const runnerIslandRouter = Router();

runnerIslandRouter.get("/", runnerIslandController.index);

export default runnerIslandRouter;