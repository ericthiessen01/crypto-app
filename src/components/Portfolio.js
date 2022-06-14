import React from 'react'

import {Context} from "../CoinsContext"

function Portfolio() {
    const {portfolioItems, removeFromPortfolio} = React.useContext(Context)

    const portfolioItemsHtml = portfolioItems.map((obj) => {
        return(
            <tr className='coin-container' key={obj.id}>
                <td className='col-short'>{obj.market_cap_rank}</td>
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
                <td className='col-med'><button className='links' onClick={() => removeFromPortfolio(obj)} >Remove from portfolio</button></td>
            </tr>
        )
    })

    return (
        <div className='main-content'>
            <h1>Portfolio</h1>
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
                    {portfolioItemsHtml}
                </tbody>
            </table>
        </div>
    )
}

export default Portfolio