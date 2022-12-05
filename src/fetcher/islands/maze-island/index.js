import getDitlepData from "../../../utils/get-ditlep-data.js";

import config from "../../../../config.js";
const ditlepEndpoints = config.ditlepEndpoints;

export default async () => {
    const url = ditlepEndpoints.islands.mazeIsland;

    return await getDitlepData(url);
};