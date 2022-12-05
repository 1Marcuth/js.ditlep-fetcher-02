import { Router } from "express";

import heroicRaceController from "../../controllers/islands/heroic-race.js"

const heroiRaceRouter = Router();

heroiRaceRouter.get("/main", heroicRaceController.main);

heroiRaceRouter.get("/lap-rewards", heroicRaceController.lapRewards);

heroiRaceRouter.get("/all", heroicRaceController.all);

export default heroiRaceRouter;