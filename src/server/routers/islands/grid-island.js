import getData from "../../../fetcher/islands/grid-island/index.js";

class GridIslandController {
    async index(req, res) {
        const data = await getData();
        
        return res.send(data);
    }
}

export default new GridIslandController();