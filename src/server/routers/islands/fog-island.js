import getData from "../../../fetcher/islands/fog-island/index.js";

class FogIslandController {
    async index(req, res) {
        const data = await getData();
        
        return res.send(data);
    }
}

export default new FogIslandController();