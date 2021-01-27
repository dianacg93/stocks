import axios from "axios";

const stockUrl = "https://cloud.iexapis.com/stable/stock/"
const stockKey = "pk_5b7a902bafd245d690f58a53acc792b3"

async function GetStock(symbol) {

    const stockRes = await axios.get(`${stockUrl}/${symbol}/quote?token=${stockKey}`).then((res) => {
        return res.data;
    });
    return stockRes;
}

export default GetStock;