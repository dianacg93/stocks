import {useState, useEffect} from "react";
import '../App.css'
import Stock from './Stock'
import Search from './Search'
import Results from './Results'
import GetStock from '../service/GetStock';

const Stocks = () => {

    const [stock, setStock] = useState([]);
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    
    const getMyStocks = async () => {
        const ndaq = await GetStock('ndaq')
        const spy = await GetStock('spy')
        const fb = await GetStock('fb')
        const snap = await GetStock('snap')

        setStock([ndaq, spy, fb, snap])
    }

    useEffect(() => {
        getMyStocks()
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const searchStock = async (e) => {
        e.preventDefault();
        const res = await GetStock(input);
        setResult(res);
        e.target.value = ""
    }

    return (
        <div>
            {stock.map((stock, i) => {
                return <Stock stock = {stock} i ={i} />
            })}
            <Search 
                handleChange = {(e) => handleChange(e)}
                searchStock = {(e) => searchStock(e)}
            />
            <Results res={result}/>
        </div>
    )
}

export default Stocks;