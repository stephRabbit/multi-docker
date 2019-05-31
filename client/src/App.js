import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import FibPage from './FibPage'
import Fib from './Fib'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>::FibCalc::</h1>
            <Link style={{ color: 'white'}} to='/'>Home</Link>
            <Link style={{ color: 'white'}} to='/info'>Info Page</Link>
          </header>
          <div>
            <Route exact path='/' component={Fib} />
            <Route path='/info' component={FibPage} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
