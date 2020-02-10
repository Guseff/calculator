import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LEASE_TERMS, CREDIT_SCORES, MILEAGES } from '../../constants'

import SelectInput from '../SelectInput'
import ResultField from '../ResultField'
import { leaseCalc } from '../../utils/calculate'

class LeaseTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: +localStorage.getItem('leaseTerm') || 36,
      mileage: +localStorage.getItem('mileage') || 12000,
    }
  }

  changeTermHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.value, 10)
    this.setState({ term: value })
    localStorage.setItem('leaseTerm', value)
  }

  changeMileageHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.value, 10)
    this.setState({ mileage: value })
    localStorage.setItem('mileage', value)
  }

  render() {
    const termVars = LEASE_TERMS
    const creditScores = CREDIT_SCORES
    const mileages = MILEAGES
    const { term, mileage } = this.state
    const { paySum, creditScore, changeCreditScoreHandle } = this.props
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
          changeVarHandle={changeCreditScoreHandle}
        />
        <ResultField text="Estimate Monthly Payment" value={calcRes} />
      </div>
    )
  }
}

LeaseTab.propTypes = {
  paySum: PropTypes.number.isRequired,
  creditScore: PropTypes.number.isRequired,
  changeCreditScoreHandle: PropTypes.func.isRequired,
}

export default LeaseTab
