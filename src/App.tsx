import { Router, Route } from 'wouter'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  )
}

export default App
