import React from 'react'
import PropTypes from 'prop-types'

import { LEASE_TERMS, CREDIT_SCORES, MILEAGES } from '../../constants'

import SelectInput from '../SelectInput'

const LeaseTab = ({
  creditScore,
  changeCreditScoreHandle,
  term,
  mileage,
  changeMileageHandle,
  changeTermHandle,
}) => {
  const termVars = LEASE_TERMS
  const creditScores = CREDIT_SCORES
  const mileages = MILEAGES
  return (
    <div>
      <SelectInput
        text="Term for Lease"
        prefix="term-lease"
        value={term}
        variables={termVars}
        changeVarHandle={changeTermHandle}
      />
      <SelectInput
        text="Annual Mileage"
        prefix="mileage"
        value={mileage}
        variables={mileages}
        changeVarHandle={changeMileageHandle}
      />
      <SelectInput
        text="Credit Score"
        prefix="score"
        value={creditScore}
        variables={creditScores}
        changeVarHandle={changeCreditScoreHandle}
      />
    </div>
  )
}

LeaseTab.propTypes = {
  creditScore: PropTypes.number.isRequired,
  changeCreditScoreHandle: PropTypes.func.isRequired,
  term: PropTypes.number.isRequired,
  mileage: PropTypes.number.isRequired,
  changeTermHandle: PropTypes.func.isRequired,
  changeMileageHandle: PropTypes.func.isRequired,
}

export default LeaseTab
