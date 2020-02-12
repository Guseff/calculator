import React from 'react'
import PropTypes from 'prop-types'

import CommonFields from '../CommonFields'
import LoanTab from '../LoanTab'
import LeaseTab from '../LeaseTab'

const MainField = ({
  isLoan,
  msrp,
  postCode,
  changePostCodeHandle,
  downPayment,
  changeDownPaymentHandle,
  tradeIn,
  changeTradeInHandle,
  creditScore,
  changeCreditScoreHandle,
  downPaymentErr,
  tradeInErr,
  sum,
  leaseTerm,
  mileage,
  changeLeaseTermHandle,
  changeMileageHandle,
  loanTerm,
  apr,
  changeLoanTermHandle,
  changeAprHandle,
  adornAprHandle,
}) => {
  const typeOfCalc = isLoan ? 'Loan' : 'Lease'
  return (
    <div className="container border border-primary border-top-0 pt-3">
      <h4 className="pb-3">{`Calculate estimate payment for ${typeOfCalc}`}</h4>
      <h5 className="pb-3 text-primary">{`MSRP $${msrp}-`}</h5>
      <form className="form-horizontal">
        <CommonFields
          postCode={postCode}
          changePostCodeHandle={changePostCodeHandle}
          downPayment={downPayment}
          changeDownPaymentHandle={changeDownPaymentHandle}
          tradeIn={tradeIn}
          changeTradeInHandle={changeTradeInHandle}
          downPaymentErr={downPaymentErr}
          tradeInErr={tradeInErr}
        />
        {isLoan ? (
          <LoanTab
            paySum={sum}
            creditScore={creditScore}
            changeCreditScoreHandle={changeCreditScoreHandle}
            term={loanTerm}
            apr={apr}
            changeTermHandle={changeLoanTermHandle}
            changeAprHandle={changeAprHandle}
            adornAprHandle={adornAprHandle}
          />
        ) : (
          <LeaseTab
            paySum={sum}
            creditScore={creditScore}
            changeCreditScoreHandle={changeCreditScoreHandle}
            term={leaseTerm}
            mileage={mileage}
            changeTermHandle={changeLeaseTermHandle}
            changeMileageHandle={changeMileageHandle}
          />
        )}
      </form>
    </div>
  )
}

MainField.propTypes = {
  isLoan: PropTypes.bool.isRequired,
  msrp: PropTypes.number.isRequired,
  postCode: PropTypes.string.isRequired,
  changePostCodeHandle: PropTypes.func.isRequired,
  downPayment: PropTypes.number.isRequired,
  changeDownPaymentHandle: PropTypes.func.isRequired,
  tradeIn: PropTypes.number.isRequired,
  changeTradeInHandle: PropTypes.func.isRequired,
  creditScore: PropTypes.number.isRequired,
  changeCreditScoreHandle: PropTypes.func.isRequired,
  tradeInErr: PropTypes.bool.isRequired,
  downPaymentErr: PropTypes.bool.isRequired,
  sum: PropTypes.number.isRequired,
  leaseTerm: PropTypes.number.isRequired,
  mileage: PropTypes.number.isRequired,
  changeLeaseTermHandle: PropTypes.func.isRequired,
  changeMileageHandle: PropTypes.func.isRequired,
  loanTerm: PropTypes.number.isRequired,
  apr: PropTypes.string.isRequired,
  changeLoanTermHandle: PropTypes.func.isRequired,
  changeAprHandle: PropTypes.func.isRequired,
  adornAprHandle: PropTypes.func.isRequired,
}

export default MainField
