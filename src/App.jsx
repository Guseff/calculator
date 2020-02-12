import 'bootstrap/dist/css/bootstrap.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainField from './components/MainField'
import DealerInfoField from './components/DealerInfoField/DealerInfoField'

import { IP_TOKEN } from './constants'
import data from './constants/data'
import { checkLimitsOut, calcPayment } from './utils/calculate'
import initState from './utils/initState'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = initState()
  }

  componentDidMount() {
    const { postCode } = this.state
    const fetchIP = () => {
      this.setState({ loading: true })
      const ipUrl = `https://ipinfo.io?lang=en&token=${IP_TOKEN}`
      fetch(ipUrl)
        .then(result => result.json())
        .then(result => {
          this.setState({ postCode: result.postal, loading: false })
        })
    }
    if (postCode === '0') {
      fetchIP()
    }
    this.setState(state => {
      return { sum: state.msrp - state.tradeIn - state.downPayment }
    })
  }

  changeLoanTermHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.id.slice(5), 10)
    this.setState({ loanTerm: value })
    localStorage.setItem('loanTerm', value)
  }

  adornAprHandle = e => {
    e.preventDefault()
    const value = Number.parseFloat(e.target.value)
    this.setState({ apr: value.toString() })
    localStorage.setItem('loanApr', value)
  }

  changeAprHandle = e => {
    e.preventDefault()
    const { value } = e.target

    if (value[0] !== '0' && !Number.parseFloat(value)) {
      this.setState({ apr: value.slice(1).length ? value.slice(1) : 0 })
    } else {
      this.setState({
        apr:
          value.slice(-1) === '.' || value.slice(-1) === '0'
            ? value
            : Number.parseFloat(value).toString(),
      })
      localStorage.setItem('loanApr', value)
    }
  }

  changeLeaseTermHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.value, 10)
    this.setState({ leaseTerm: value })
    localStorage.setItem('leaseTerm', value)
  }

  changeMileageHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.value, 10)
    this.setState({ mileage: value })
    localStorage.setItem('mileage', value)
  }

  getDealerInfoCard = e => {
    const brand = e.target.id.slice(5)
    this.setState({ loadingData: true })
    const promise = new Promise(res => setTimeout(() => res(data), 3000))

    promise
      .then(result => result.find(x => x.dealer === brand))
      .then(result => {
        localStorage.setItem('msrp', result.msrp)
        this.setState(state => {
          return {
            sum: result.msrp - state.tradeIn - state.downPayment,
            msrp: result.msrp,
            vehicleName: result.vehicleName,
            dealerName: result.dealerName,
            dealerPhone: result.dealerPhone,
            dealerRating: result.dealerRating,
            loading: false,
            loadingData: false,
            isDataLoaded: true,
          }
        })
      })
  }

  changeTab = e => {
    e.preventDefault()
    this.setState(prevState => ({ isLoan: !prevState.isLoan }))
  }

  changePostCodeHandle = e => {
    e.preventDefault()
    const { value } = e.target

    if (/\d/.test(value.slice(-1))) {
      this.setState({ postCode: value })
      localStorage.setItem('postCode', value)
    } else {
      this.setState({ postCode: value.length > 1 ? value.slice(0, -1) : '' })
    }
  }

  changeDownPaymentHandle = e => {
    e.preventDefault()
    const value =
      e.target.value === '' ? 0 : Number.parseInt(e.target.value, 10)
    const { msrp } = this.state

    this.setState({ downPayment: value })
    if (!checkLimitsOut(value, msrp)) {
      localStorage.setItem('downPayment', value)
      this.setState({ downPaymentErr: false })
      this.setState(state => {
        return { sum: state.msrp - state.tradeIn - value }
      })
    } else {
      this.setState({ downPaymentErr: true })
    }
  }

  changeTradeInHandle = e => {
    e.preventDefault()
    const value =
      e.target.value === '' ? 0 : Number.parseInt(e.target.value, 10)
    const { msrp } = this.state
    this.setState({ tradeIn: value })
    if (!checkLimitsOut(value, msrp)) {
      localStorage.setItem('tradeIn', value)
      this.setState({ tradeInErr: false })
      this.setState(state => {
        return { sum: state.msrp - state.downPayment - value }
      })
    } else {
      this.setState({ tradeInErr: true })
    }
  }

  changeCreditScoreHandle = e => {
    e.preventDefault()
    const value = e.target.value ? e.target.value : e.target.id.slice(5)
    this.setState({ creditScore: Number.parseInt(value, 10) })
    localStorage.setItem('creditScore', Number.parseInt(value, 10))
  }

  render() {
    const {
      loading,
      isLoan,
      msrp,
      postCode,
      downPayment,
      tradeIn,
      creditScore,
      vehicleName,
      dealerName,
      dealerPhone,
      dealerRating,
      loadingData,
      isDataLoaded,
      downPaymentErr,
      tradeInErr,
      sum,
      leaseTerm,
      mileage,
      loanTerm,
      apr,
    } = this.state

    const payment = calcPayment(
      isLoan,
      sum,
      loanTerm,
      leaseTerm,
      creditScore,
      mileage,
      apr
    )

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
        <div className="col-xl-8 h-100">
          <div className="container rounded border border-primary py-3 mt-1 h-100">
            <Navbar isLoan={isLoan} changeTab={this.changeTab} />
            <MainField
              isLoan={isLoan}
              msrp={msrp}
              postCode={postCode}
              changePostCodeHandle={this.changePostCodeHandle}
              downPayment={downPayment}
              changeDownPaymentHandle={this.changeDownPaymentHandle}
              tradeIn={tradeIn}
              changeTradeInHandle={this.changeTradeInHandle}
              creditScore={creditScore}
              changeCreditScoreHandle={this.changeCreditScoreHandle}
              downPaymentErr={downPaymentErr}
              tradeInErr={tradeInErr}
              sum={sum}
              leaseTerm={leaseTerm}
              mileage={mileage}
              changeLeaseTermHandle={this.changeLeaseTermHandle}
              changeMileageHandle={this.changeMileageHandle}
              loanTerm={loanTerm}
              apr={apr}
              changeLoanTermHandle={this.changeLoanTermHandle}
              changeAprHandle={this.changeAprHandle}
              adornAprHandle={this.adornAprHandle}
            />
          </div>
        </div>
        <div className="col-xl-4 h-100">
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
            sum={payment}
          />
        </div>
      </div>
    )
  }
}

export default App
