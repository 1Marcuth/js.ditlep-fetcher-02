import { getLapRewardsData, getMainData } from "../../../fetcher/islands/heroic-race/index.js";

class HeroicRaceController {
    async main(req, res) {
        const data = await getMainData();

        return res.send(data);
    }

    async lapRewards(req, res) {
        const data = await getLapRewardsData();

        return res.send(data);
    }

    async all(req, res) {
        const data = {
            main: await getMainData(),
            lapRewards: await getLapRewardsData()
        };

        return res.send(data);
    }
}

export default new HeroicRaceController();