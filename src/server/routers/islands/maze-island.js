import getData from "../../../fetcher/islands/maze-island/index.js";

class MazeIslandController {
    async index(req, res) {
        const data = await getData();
        
        return res.send(data);
    }
}

export default new MazeIslandController();