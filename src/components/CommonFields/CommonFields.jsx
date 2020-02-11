import React from 'react'
import PropTypes from 'prop-types'

import NumInput from '../NumInput'
import StrInput from '../StrInput'
// import ErrorMessage from '../ErrorMessage/ErrorMessage'

const CommonFields = ({
  postCode,
  changePostCodeHandle,
  downPayment,
  changeDownPaymentHandle,
  tradeIn,
  changeTradeInHandle,
  downPaymentErr,
  tradeInErr,
}) => {
  return (
    <div>
      <StrInput
        variable={postCode}
        changeVarHandle={changePostCodeHandle}
        text="Post Code:"
        name="post-code"
      />
      <NumInput
        variable={downPayment}
        changeVarHandle={changeDownPaymentHandle}
        text="Down Payment:"
        dollar
        name="down-payment"
        err={downPaymentErr}
      />
      {/* <ErrorMessage err={downPaymentErr} /> */}
      <NumInput
        variable={tradeIn}
        changeVarHandle={changeTradeInHandle}
        text="Trade In:"
        dollar
        name="trade-in"
        err={tradeInErr}
      />
      {/* <ErrorMessage err={tradeInErr} /> */}
    </div>
  )
}

CommonFields.propTypes = {
  postCode: PropTypes.string.isRequired,
  downPayment: PropTypes.number.isRequired,
  tradeIn: PropTypes.number.isRequired,
  changePostCodeHandle: PropTypes.func.isRequired,
  changeDownPaymentHandle: PropTypes.func.isRequired,
  changeTradeInHandle: PropTypes.func.isRequired,
  tradeInErr: PropTypes.bool.isRequired,
  downPaymentErr: PropTypes.bool.isRequired,
}

export default CommonFields
