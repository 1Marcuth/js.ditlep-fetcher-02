import getData from "../../../fetcher/islands/runner-island/index.js";

class RunnerIslandController {
    async index(req, res) {
        const data = await getData();
        
        return res.send(data);
    }
}

export default new RunnerIslandController();