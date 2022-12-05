import axios from "axios";
import decryptData from "./decrypto-data.js";

async function getDitlepData(url) {
    const response = await axios.get(url);

    return decryptData(response.data);
};

export default getDitlepData;