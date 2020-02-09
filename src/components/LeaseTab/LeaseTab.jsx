import React, { Component } from 'react'

import SelectInput from '../SelectInput'
import ResultField from '../ResultField'

class LeaseTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: 36,
      creditScore: 750,
      mileage: 12000,
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
        <ResultField value={780} />
      </div>
    )
  }
}

export default LeaseTab
