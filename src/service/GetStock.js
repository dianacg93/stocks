import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const stockUrl = process.env.STOCK_URL
const stockKey = process.env.STOCK_KEY

async function GetStock(symbol) {
    const stockRes = await axios.get(`${stockUrl}/${symbol}/quote?token=${stockKey}`).then((res) => {
        return res.data;
    });
    return stockRes;
}

export default GetStock;