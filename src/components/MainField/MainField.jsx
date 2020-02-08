import React from 'react'
import PropTypes from 'prop-types'

import CommonFields from '../CommonFields'
// import LoanTab from '../LoanTab'

const MainField = ({
  isLoan,
  vehiclePrice,
  changePriceHandle,
  postCode,
  changePostCodeHandle,
  downPayment,
  changeDownPaymentHandle,
  tradeIn,
  changeTradeInHandle,
}) => {
  const typeOfCalc = isLoan ? 'Loan' : 'Lease'
  return (
    <div className="container border border-dark border-top-0 pt-3">
      <h4 className="pb-3">{`Calculate a payment estimate for ${typeOfCalc}`}</h4>
      <CommonFields
        vehiclePrice={vehiclePrice}
        changePriceHandle={changePriceHandle}
        postCode={postCode}
        changePostCodeHandle={changePostCodeHandle}
        downPayment={downPayment}
        changeDownPaymentHandle={changeDownPaymentHandle}
        tradeIn={tradeIn}
        changeTradeInHandle={changeTradeInHandle}
      />
    </div>
  )
}

MainField.propTypes = {
  isLoan: PropTypes.bool.isRequired,
  vehiclePrice: PropTypes.number.isRequired,
  changePriceHandle: PropTypes.func.isRequired,
  postCode: PropTypes.number.isRequired,
  changePostCodeHandle: PropTypes.func.isRequired,
  downPayment: PropTypes.number.isRequired,
  changeDownPaymentHandle: PropTypes.func.isRequired,
  tradeIn: PropTypes.number.isRequired,
  changeTradeInHandle: PropTypes.func.isRequired,
}

export default MainField