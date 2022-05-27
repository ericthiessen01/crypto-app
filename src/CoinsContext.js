import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [topHundred, setTopHundred] = React.useState([])
    const [portfolioItems, setPortfolioItems] = React.useState([])

//function to get data from coingecko API
    function getData() {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then(res => res.json())
            .then(data => setTopHundred(data))
    }

//run fetch and update state every hour
    React.useEffect(() => {
        getData()
        const interval = setInterval(() => {
        getData()
            }, 3600000)
        return () => clearInterval(interval)
    }, [])
    console.log(topHundred)

    return (
        <Context.Provider value={{
            topHundred: topHundred
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

/* add nav to switch between coinslist and portfolio
add search input to coinslist use | to enable search for name or id
math in portfolio to calc total value of holdings
hardcode portfolio data first then use state/local storage to hold data
*/