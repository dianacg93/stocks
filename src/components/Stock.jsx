import '../App.css'

const Stock = (props, i) => {


    return ( 
        <div key={i}>
            <div>{props.stock.symbol}</div>
            <div>{props.stock.companyName}</div>
            <div>{props.stock.latestPrice}</div>
            <div>{props.stock.changePercent}</div>
        </div>
    )
}

export default Stock;