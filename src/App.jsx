import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainField from './components/MainField'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoan: true,
      vehiclePrice: 15000,
      postCode: 224009,
      downPayment: 0,
      tradeIn: 0,
    }
  }

  changeTab = e => {
    e.preventDefault()
    this.setState(prevState => ({ isLoan: !prevState.isLoan }))
  }

  changePriceHandle = e => {
    e.preventDefault()
    this.setState({ vehiclePrice: Number.parseInt(e.target.value, 10) })
  }

  changePostCodeHandle = e => {
    e.preventDefault()
    this.setState({ postCode: Number.parseInt(e.target.value, 10) })
  }

  changeDownPaymentHandle = e => {
    e.preventDefault()
    this.setState({ downPayment: Number.parseInt(e.target.value, 10) })
  }

  changeTradeInHandle = e => {
    e.preventDefault()
    this.setState({ tradeIn: Number.parseInt(e.target.value, 10) })
  }

  render() {
    const { isLoan, vehiclePrice, postCode, downPayment, tradeIn } = this.state
    return (
      <div className="container rounded border py-3 mt-1">
        <Navbar isLoan={isLoan} changeTab={this.changeTab} />
        <MainField
          isLoan={isLoan}
          vehiclePrice={vehiclePrice}
          changePriceHandle={this.changePriceHandle}
          postCode={postCode}
          changePostCodeHandle={this.changePostCodeHandle}
          downPayment={downPayment}
          changeDownPaymentHandle={this.changeDownPaymentHandle}
          tradeIn={tradeIn}
          changeTradeInHandle={this.changeTradeInHandle}
        />
      </div>
    )
  }
}

export default App
