import getData from "../../../fetcher/islands/puzzle-island/index.js";

class PuzzleIslandController {
    async index(req, res) {
        const data = await getData();
        
        return res.send(data);
    }
}

export default new PuzzleIslandController();