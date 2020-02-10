import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainField from './components/MainField'
import DealerInfoField from './components/DealerInfoField/DealerInfoField'

import { IP_TOKEN } from './constants'
import data from './constants/data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingData: false,
      isDataLoaded: false,
      loading: false,
      isLoan: true,
      postCode: 224009,
      vehiclePrice: 15000,
      downPayment: 0,
      tradeIn: 0,
      creditScore: +localStorage.getItem('creditScore') || 750,
    }
  }

  componentDidMount() {
    const fetchIP = () => {
      this.setState({ loading: true })
      const ipUrl = `https://ipinfo.io?lang=en&token=${IP_TOKEN}`
      fetch(ipUrl)
        .then(result => result.json())
        .then(result => {
          this.setState({ postCode: +result.postal })
          this.setState({ loading: false })
        })
    }
    fetchIP()
  }

  componentWillUnmount() {
    const { creditScore } = this.state
    localStorage.setItem('creditScore', creditScore)
  }

  getDealerInfoCard = () => {
    this.setState({ loadingData: true })
    const promise = new Promise(res => setTimeout(() => res(data), 3000))

    promise.then(result => {
      this.setState({ msrp: result.msrp })
      this.setState({ vehicleName: result.vehicleName })
      this.setState({ dealerName: result.dealerName })
      this.setState({ dealerPhone: result.dealerPhone })
      this.setState({ dealerRating: result.dealerRating })
      this.setState({ loading: false })
      this.setState({ loadingData: false })
      this.setState({ isDataLoaded: true })
    })
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

  changeCreditScoreHandle = e => {
    e.preventDefault()
    const value = e.target.value ? e.target.value : e.target.id.slice(5)
    this.setState({ creditScore: Number.parseInt(value, 10) })
  }

  render() {
    const {
      loading,
      isLoan,
      vehiclePrice,
      postCode,
      downPayment,
      tradeIn,
      creditScore,
      msrp,
      vehicleName,
      dealerName,
      dealerPhone,
      dealerRating,
      loadingData,
      isDataLoaded,
    } = this.state

    if (loading) {
      return (
        <div className="d-flex vh-100 justify-content-center">
          <div
            className="spinner-border text-primary align-self-center"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div className="row">
        <div className="col-xl-8">
          <div className="container rounded border border-primary py-3 mt-1">
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
              creditScore={creditScore}
              changeCreditScoreHandle={this.changeCreditScoreHandle}
            />
          </div>
        </div>
        <div className="col-xl-4">
          <DealerInfoField
            postCode={postCode}
            msrp={msrp}
            vehicleName={vehicleName}
            dealerName={dealerName}
            dealerPhone={dealerPhone}
            dealerRating={dealerRating}
            getDealerInfoCard={this.getDealerInfoCard}
            loadingData={loadingData}
            isDataLoaded={isDataLoaded}
          />
        </div>
      </div>
    )
  }
}

export default App
