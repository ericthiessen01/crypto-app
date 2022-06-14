import React from 'react'

import {Context} from "../CoinsContext"

function Portfolio() {
    const {portfolioItems, removeFromPortfolio} = React.useContext(Context)

    const portfolioItemsHtml = portfolioItems.map((obj) => {
        return(
            <tr className='coin-container' key={obj.id}>
                <td className='name-col'>
                    <img className='coin-logo' src={obj.image} alt="asset-logo"/>{' '}{obj.name}
                </td>
                <td className='price-col'>
                    {obj.current_price.toLocaleString("en-US", {
                        style: "currency", 
                        currency: "USD", 
                        maximumFractionDigits: 8,
                        minimumFractionDigits: 0
                    })}
                </td>
                <td>{obj.price_change_percentage_24h.toLocaleString("en-US", {minimumFractionDigits: 3})}%</td>
                <td><div className='links' onClick={() => removeFromPortfolio(obj)} >Remove from portfolio</div></td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Portfolio</h1>
            <table className='asset-list'>
                <thead className='table-head'>
                    <tr className='coin-container'>
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