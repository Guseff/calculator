import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectInput from '../SelectInput'
import ResultField from '../ResultField'
import { leaseCalc } from '../../utils/calculate'

class LeaseTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: +localStorage.getItem('leaseTerm') || 36,
      creditScore: +localStorage.getItem('creditScore') || 750,
      mileage: +localStorage.getItem('mileage') || 12000,
    }
  }

  changeTermHandle = e => {
    e.preventDefault()
    this.setState({ term: Number.parseInt(e.target.value, 10) })
  }

  changeCreditScoreChangeHandle = e => {
    e.preventDefault()
    this.setState({ creditScore: Number.parseInt(e.target.value, 10) })
  }

  changeMileageHandle = e => {
    e.preventDefault()
    this.setState({ mileage: Number.parseInt(e.target.value, 10) })
  }

  render() {
    const termVars = [24, 36, 48]
    const creditScores = [600, 650, 700, 750, 800, 850, 900]
    const mileages = [10000, 12000, 15000]
    const { term, creditScore, mileage } = this.state
    const { paySum } = this.props
    const calcRes = leaseCalc(paySum, term, creditScore, mileage)
    return (
      <div>
        <SelectInput
          text="Term for Lease"
          prefix="term-lease"
          value={term}
          variables={termVars}
          changeVarHandle={this.changeTermHandle}
        />
        <SelectInput
          text="Annual Mileage"
          prefix="mileage"
          value={mileage}
          variables={mileages}
          changeVarHandle={this.changeMileageHandle}
        />
        <SelectInput
          text="Credit Score"
          prefix="score"
          value={creditScore}
          variables={creditScores}
          changeVarHandle={this.changeCreditScoreChangeHandle}
        />
        <ResultField text="Monthly Payment Lease" value={calcRes} />
      </div>
    )
  }
}

LeaseTab.propTypes = {
  paySum: PropTypes.number.isRequired,
}

export default LeaseTab
