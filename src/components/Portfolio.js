import React from 'react'

import {Context} from "../CoinsContext"

function Portfolio() {
    const {topHundred} = React.useContext(Context)

    return (
        <div>Portfolio</div>
    )
}

export default Portfolio