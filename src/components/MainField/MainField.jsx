import React from 'react'
import PropTypes from 'prop-types'

import CommonFields from '../CommonFields'
import LoanTab from '../LoanTab/LoanTab'
import LeaseTab from '../LeaseTab/LeaseTab'

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
}) => {
  const typeOfCalc = isLoan ? 'Loan' : 'Lease'
  return (
    <div className="container border border-dark border-top-0 pt-3">
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
        />
        {isLoan ? (
          <LoanTab
            paySum={msrp - tradeIn - downPayment}
            creditScore={creditScore}
            changeCreditScoreHandle={changeCreditScoreHandle}
          />
        ) : (
          <LeaseTab
            paySum={msrp - tradeIn - downPayment}
            creditScore={creditScore}
            changeCreditScoreHandle={changeCreditScoreHandle}
          />
        )}
      </form>
    </div>
  )
}

MainField.propTypes = {
  isLoan: PropTypes.bool.isRequired,
  msrp: PropTypes.number.isRequired,
  postCode: PropTypes.number.isRequired,
  changePostCodeHandle: PropTypes.func.isRequired,
  downPayment: PropTypes.number.isRequired,
  changeDownPaymentHandle: PropTypes.func.isRequired,
  tradeIn: PropTypes.number.isRequired,
  changeTradeInHandle: PropTypes.func.isRequired,
  creditScore: PropTypes.number.isRequired,
  changeCreditScoreHandle: PropTypes.func.isRequired,
}

export default MainField
