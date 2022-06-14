import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [topHundred, setTopHundred] = React.useState([])
    const [portfolioItems, setPortfolioItems] = React.useState(() => {
        const storedPortfolio = localStorage.getItem('portfolio')
        return storedPortfolio !== null || undefined
            ? JSON.parse(storedPortfolio)
            : [];
      })

//function to get data from coingecko API
    function getData() {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then(res => res.json())
            .then(data => {
                setTopHundred(data)
                setPortfolioItems(prevPortfolioItems => 
                    data.filter(updatedData => 
                        prevPortfolioItems.some(oldData => 
                            updatedData.id === oldData.id)
                    )
                )
            })
    }

//run fetch and update state every hour (or other interval as set)
    React.useEffect(() => {
        getData()
        const interval = setInterval(() => {
            getData()
        }, 3600000)
        return () => clearInterval(interval)
    }, [])
    // console.log(topHundred)

//add KVP for quantity

//function to add coin to portfolio
    function addToPortfolio(selectedPortfolioItem) {
        setPortfolioItems(prevPortfolioItems => {
            if(prevPortfolioItems.some(asset => asset.id === selectedPortfolioItem.id)){
                return (
                    prevPortfolioItems
                )
            } else {
                return(
                    [...prevPortfolioItems, selectedPortfolioItem]
                )    
            }
        })
    }

//function to remove a coin from portfolio
function removeFromPortfolio(selectedPortfolioItem) {
    setPortfolioItems(prevPortfolioItems => 
        prevPortfolioItems.filter(item => item.id != selectedPortfolioItem.id)
    )
}
    
//store portfolio items in local storage every time portfolio is updated
    React.useEffect(() => {
        localStorage.setItem('portfolio', JSON.stringify(portfolioItems))
        // console.log(portfolioItems)
    }, [portfolioItems])

    return (
        <Context.Provider value={{
            topHundred: topHundred,
            addToPortfolio: addToPortfolio,
            portfolioItems: portfolioItems,
            removeFromPortfolio: removeFromPortfolio
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

/* add search input to coinslist use | to enable search for name or id
add inputs and math in portfolio to calc total value of holdings
*/