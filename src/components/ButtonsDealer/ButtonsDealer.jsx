import React from 'react'
import PropTypes from 'prop-types'

const ButtonsDealer = ({ text, prefix, variables, changeVarHandle }) => {
  return (
    <div className="form-group">
      <div className="">{text}</div>
      <div className="btn-group btn-group-sm w-100" role="group">
        {variables.map(x => (
          <button
            key={x}
            type="button"
            id={`${prefix}-${x}`}
            onClick={changeVarHandle}
            className="btn btn-outline-primary w-100"
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  )
}

ButtonsDealer.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeVarHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
}

export default ButtonsDealer
