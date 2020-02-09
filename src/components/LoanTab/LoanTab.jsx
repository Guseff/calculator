import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NumInput from '../NumInput'
import ButtonRow from '../ButtonRow'
import ResultField from '../ResultField'
import { loanCalc } from '../../utils/calculate'

class LoanTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: +localStorage.getItem('loanTerm') || 24,
      creditScore: +localStorage.getItem('creditScore') || 750,
      apr: +localStorage.getItem('loanApr') || 0,
    }
  }

  componentWillUnmount() {
    const { term, creditScore, apr } = this.state
    localStorage.setItem('loanTerm', term)
    localStorage.setItem('creditScore', creditScore)
    localStorage.setItem('loanApr', apr)
  }

  termChangeHandle = e => {
    e.preventDefault()
    this.setState({ term: Number.parseInt(e.target.id.slice(5), 10) })
  }

  creditScoreChangeHandle = e => {
    e.preventDefault()
    this.setState({ creditScore: Number.parseInt(e.target.id.slice(5), 10) })
  }

  changeAprHandle = e => {
    e.preventDefault()
    this.setState({ apr: Number.parseInt(e.target.value, 10) })
  }

  render() {
    const termVars = [12, 24, 36, 48, 72, 84]
    const creditScores = [600, 650, 700, 750, 800, 850, 900]
    const { term, creditScore, apr } = this.state
    const { paySum } = this.props
    const calcRes = loanCalc(paySum, term, creditScore, apr)
    return (
      <div>
        <NumInput
          variable={apr}
          changeVarHandle={this.changeAprHandle}
          text="APR:"
          dollar={false}
          name="apr"
        />
        <ButtonRow
          text="Term for Loan"
          prefix="term"
          active={term}
          variables={termVars}
          changeVarHandle={this.termChangeHandle}
        />
        <ButtonRow
          text="Credit Score"
          prefix="scor"
          active={creditScore}
          variables={creditScores}
          changeVarHandle={this.creditScoreChangeHandle}
        />
        <ResultField text="Monthly Payment Loan" value={calcRes} />
      </div>
    )
  }
}

LoanTab.propTypes = {
  paySum: PropTypes.number.isRequired,
}

export default LoanTab
