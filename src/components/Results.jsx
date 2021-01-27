import '../App.css'

const Results = ({res}) => {
    const {symbol, companyName, latestPrice, changePercent} = res;
    const percentBg = changePercent < 0 ? "negative" : "positive";

    return (
        <div className="stock-container">
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

export default Results;