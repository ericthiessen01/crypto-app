import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import CoinsList from "./components/CoinsList"
import Portfolio from './components/Portfolio'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/crypto-app/" element={<CoinsList />}/>
            <Route path="/crypto-app/portfolio" element={<Portfolio />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App;
