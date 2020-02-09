import React, { Component } from 'react'
import ButtonRow from '../ButtonRow'

class LoanTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: 24,
      creditScore: 750,
    }
  }

  termChangeHandle = e => {
    e.preventDefault()
    this.setState({ term: Number.parseInt(e.target.id.slice(5), 10) })
  }

  creditScoreChangeHandle = e => {
    e.preventDefault()
    this.setState({ creditScore: Number.parseInt(e.target.id.slice(5), 10) })
  }

  render() {
    const termVars = [12, 24, 36, 48, 72, 84]
    const creditScores = [600, 650, 700, 750, 800, 850, 900]
    const { term, creditScore } = this.state
    return (
      <div>
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
      </div>
    )
  }
}

export default LoanTab
