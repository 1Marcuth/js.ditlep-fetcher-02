import getData from "../../../fetcher/islands/tower-island/index.js";

class TowerIslandController {
    async index(req, res) {
        const data = await getData();
        
        return res.send(data);
    }
}

export default new TowerIslandController();