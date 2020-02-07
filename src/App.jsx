import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainField from './components/MainField'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoan: true,
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab(e) {
    e.preventDefault()
    this.setState(prevState => ({ isLoan: !prevState.isLoan }))
  }

  render() {
    const { isLoan } = this.state
    return (
      <div className="container rounded border py-3 mt-1">
        <Navbar isLoan={isLoan} changeTab={this.changeTab} />
        <MainField />
      </div>
    )
  }
}

export default App
