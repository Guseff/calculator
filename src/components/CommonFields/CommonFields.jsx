import React from 'react'
import PropTypes from 'prop-types'

import NumInput from '../NumInput'

const CommonFields = ({
  vehiclePrice,
  changePriceHandle,
  // postCode,
  // changePostCodeHandle,
}) => {
  return (
    <form className="form-horizontal">
      <NumInput
        variable={vehiclePrice}
        changeVarHandle={changePriceHandle}
        text="Vehicle Sales Price:"
        dollar
        name="price"
      />
    </form>
  )
}

CommonFields.propTypes = {
  vehiclePrice: PropTypes.number.isRequired,
  // postCode: PropTypes.number.isRequired,
  changePriceHandle: PropTypes.func.isRequired,
  // changePostCodeHandle: PropTypes.func.isRequired,
}

export default CommonFields
