import '../App.css'

const Stock = (props, i) => {
    const {symbol, companyName, latestPrice, changePercent} = props.stock;
    const percentBg = changePercent < 0 ? "negative" : "positive";

    return ( 
        <div key={i} className="stock-container">
            <div>
                <div><strong>{symbol}</strong></div>
                <div><small>{companyName}</small></div>
            </div>
            <div>
                <div>{latestPrice}</div>
                <div className={percentBg}>{changePercent ? `${(changePercent).toFixed(2)}` : ""}</div>
            </div>
        </div>
    )
}

export default Stock;