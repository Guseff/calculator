import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LOAN_TERMS, CREDIT_SCORES } from '../../constants'

import StrInput from '../StrInput'
import ButtonRow from '../ButtonRow'
import ResultField from '../ResultField'
import { loanCalc } from '../../utils/calculate'

class LoanTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: +localStorage.getItem('loanTerm') || 24,
      apr: localStorage.getItem('loanApr') || '0',
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

  adornAprHandle = e => {
    e.preventDefault()
    const value = Number.parseFloat(e.target.value)
    this.setState({ apr: value.toString() })
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
        <StrInput
          variable={apr}
          changeVarHandle={this.changeAprHandle}
          adornAprHandle={this.adornAprHandle}
          text="APR:"
          proc
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
