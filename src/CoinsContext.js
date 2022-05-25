import React from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [topHundred, setTopHundred] = React.useState([])

    React.useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then(res => res.json())
        .then(data => setTopHundred(data))
    }, [])
    console.log(topHundred)
    
    return (
        <Context.Provider value={{

        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}