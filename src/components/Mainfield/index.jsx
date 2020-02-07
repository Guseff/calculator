import React from './node_modules/react'
import LoanTab from '../LoanTab'

const MainField = () => {
  return (
    <div className="container border border-dark border-top-0 pt-3">
      <h4 className="pb-3">Calculate a payment estimate for Loan</h4>
      <LoanTab />
    </div>
  )
}

export default MainField
