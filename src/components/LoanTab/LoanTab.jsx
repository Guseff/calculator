import React from 'react'
import PropTypes from 'prop-types'

import { LOAN_TERMS, CREDIT_SCORES } from '../../constants'

import StrInput from '../StrInput'
import ButtonRow from '../ButtonRow'

const LoanTab = ({
  term,
  apr,
  creditScore,
  changeCreditScoreHandle,
  changeAprHandle,
  adornAprHandle,
  changeTermHandle,
}) => {
  const termVars = LOAN_TERMS
  const creditScores = CREDIT_SCORES
  return (
    <div>
      <StrInput
        variable={apr}
        changeVarHandle={changeAprHandle}
        adornAprHandle={adornAprHandle}
        text="APR:"
        proc
        name="apr"
      />
      <ButtonRow
        text="Term for Loan"
        prefix="term"
        active={term}
        variables={termVars}
        changeVarHandle={changeTermHandle}
      />
      <ButtonRow
        text="Credit Score"
        prefix="scor"
        active={creditScore}
        variables={creditScores}
        changeVarHandle={changeCreditScoreHandle}
      />
    </div>
  )
}

LoanTab.propTypes = {
  creditScore: PropTypes.number.isRequired,
  changeCreditScoreHandle: PropTypes.func.isRequired,
  term: PropTypes.number.isRequired,
  apr: PropTypes.string.isRequired,
  changeTermHandle: PropTypes.func.isRequired,
  changeAprHandle: PropTypes.func.isRequired,
  adornAprHandle: PropTypes.func.isRequired,
}

export default LoanTab
