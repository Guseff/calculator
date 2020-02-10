import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LOAN_TERMS, CREDIT_SCORES } from '../../constants'

import NumInput from '../NumInput'
import ButtonRow from '../ButtonRow'
import ResultField from '../ResultField'
import { loanCalc } from '../../utils/calculate'

class LoanTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: +localStorage.getItem('loanTerm') || 24,
      apr: +localStorage.getItem('loanApr') || 0,
    }
  }

  termChangeHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.id.slice(5), 10)
    this.setState({ term: value })
    localStorage.setItem('loanTerm', value)
  }

  changeAprHandle = e => {
    e.preventDefault()
    const value = Number.parseInt(e.target.value, 10)
    this.setState({ apr: value })
    localStorage.setItem('loanApr', value)
  }

  render() {
    const termVars = LOAN_TERMS
    const creditScores = CREDIT_SCORES
    const { term, apr } = this.state
    const { paySum, creditScore, changeCreditScoreHandle } = this.props
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
          changeVarHandle={changeCreditScoreHandle}
        />
        <ResultField text="Estimate Monthly Payment" value={calcRes} />
      </div>
    )
  }
}

LoanTab.propTypes = {
  paySum: PropTypes.number.isRequired,
  creditScore: PropTypes.number.isRequired,
  changeCreditScoreHandle: PropTypes.func.isRequired,
}

export default LoanTab
