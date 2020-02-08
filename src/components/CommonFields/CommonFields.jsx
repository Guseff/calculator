import React from 'react'
import PropTypes from 'prop-types'

import NumInput from '../NumInput'

const CommonFields = ({
  vehiclePrice,
  changePriceHandle,
  postCode,
  changePostCodeHandle,
  downPayment,
  changeDownPaymentHandle,
  tradeIn,
  changeTradeInHandle,
}) => {
  return (
    <form className="form-horizontal">
      <NumInput
        variable={postCode}
        changeVarHandle={changePostCodeHandle}
        text="Post Code:"
        dollar={false}
        name="post-code"
      />
      <NumInput
        variable={vehiclePrice}
        changeVarHandle={changePriceHandle}
        text="Vehicle Sales Price:"
        dollar
        name="price"
      />
      <NumInput
        variable={downPayment}
        changeVarHandle={changeDownPaymentHandle}
        text="Down Payment:"
        dollar
        name="down-payment"
      />
      <NumInput
        variable={tradeIn}
        changeVarHandle={changeTradeInHandle}
        text="Trade In:"
        dollar
        name="trade-in"
      />
    </form>
  )
}

CommonFields.propTypes = {
  vehiclePrice: PropTypes.number.isRequired,
  postCode: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  tradeIn: PropTypes.number.isRequired,
  changePriceHandle: PropTypes.func.isRequired,
  changePostCodeHandle: PropTypes.func.isRequired,
  changeDownPaymentHandle: PropTypes.func.isRequired,
  changeTradeInHandle: PropTypes.func.isRequired,
}

export default CommonFields
