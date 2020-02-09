import React from 'react'
import PropTypes from 'prop-types'

const ResultField = ({ text, value }) => {
  return (
    <div className="col-md-12 text-right">
      <h5>{`${text}: $ ${value}-`}</h5>
    </div>
  )
}

ResultField.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default ResultField
