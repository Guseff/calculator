import React from 'react'
import PropTypes from 'prop-types'

const ResultField = ({ text, value }) => {
  const result = value > 0 ? value : 0

  return (
    <div className="col-md-12 text-right mt-3">
      <h5>{`${text}: $${result}/month`}</h5>
    </div>
  )
}

ResultField.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default ResultField
