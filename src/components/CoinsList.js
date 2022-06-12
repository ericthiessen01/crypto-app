import React from 'react'

import {Context} from "../CoinsContext"

function CoinsList() {
    const {topHundred, addToPortfolio} = React.useContext(Context)

    const coinSummaryHtml = topHundred.map((obj, i) => {
        return(
            <div className='coin-container' key={obj.id}>
                <img className='coin-logo' src={obj.image} alt="asset-logo"></img>
                <h4>Rank by market cap: {obj.market_cap_rank}</h4>
                <h4>
                    {obj.symbol}:{' '}
                    {obj.current_price.toLocaleString("en-US", {
                        style: "currency", 
                        currency: "USD", 
                        maximumFractionDigits: 8,
                        minimumFractionDigits: 0
                    })}
                </h4>
                <h4>
                    24 hour change: {obj.price_change_percentage_24h.toLocaleString("en-US", {minimumFractionDigits: 3})}%
                </h4>
                <button onClick={() => addToPortfolio(obj)} >Add to portfolio</button>
            </div>
        )
    })

    return (
        <div>
            {coinSummaryHtml}
        </div>
    )
}


export default CoinsList