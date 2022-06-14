import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Context} from "../CoinsContext"

function CoinsList() {
    const {topHundred, portfolioItems, addToPortfolio} = React.useContext(Context)
    let navigate = useNavigate()

    const coinSummaryHtml = topHundred.map((obj, i) => {
        return(
            <tr className='coin-container' key={obj.id}>
                <td className='col-short' >{obj.market_cap_rank}</td>
                <td className='name-col col-long'>
                    <img className='coin-logo' src={obj.image} alt="asset-logo"/>{' '}{obj.name}
                </td>
                <td className='price-col col-med'>
                    {obj.current_price.toLocaleString("en-US", {
                        style: "currency", 
                        currency: "USD", 
                        maximumFractionDigits: 8,
                        minimumFractionDigits: 0
                    })}
                </td>
                <td className='col-short'>{obj.price_change_percentage_24h.toLocaleString("en-US", {minimumFractionDigits: 3})}%</td>
            {/* ternary to change button if coin is already in portfolio */}
                <td className='col-med'>
                    {portfolioItems.includes(obj) ?
                    <button className='links' onClick={() => {navigate("/portfolio")}}>View Portfolio</button> :
                    <button className='links' onClick={() => addToPortfolio(obj)} >Add to Portfolio</button>
                    }
                </td>
            </tr>
        )
    })

    return (
        <div className='main-content'>
            <h1>Coin List</h1>
            <table className='asset-list'>
                <thead className='table-head'>
                    <tr>
                        <th>Rank</th>
                        <th className='name-col'>Name</th>
                        <th className='price-col'>Price</th>
                        <th>24 Hour Change</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {coinSummaryHtml}
                </tbody>
            </table>
        </div>
    )
}


export default CoinsList