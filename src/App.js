import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import CoinsList from "./components/CoinsList"
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div className="App">
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
          <Routes>
            <Route path="/" element={<CoinsList />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App;
