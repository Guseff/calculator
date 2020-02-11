import React from 'react'
import PropTypes from 'prop-types'

const NumInput = ({ variable, changeVarHandle, text, name, dollar, proc }) => {
  return (
    <div className="form-group row">
      <div className="col-md-5">
        <div className="">{text}</div>
      </div>
      <div className="input-group input-group-sm col-md-7">
        {dollar ? (
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
        ) : null}
        <input
          type="number"
          className="form-control text-right"
          id={`input-${name}`}
          name={`input-${name}`}
          value={variable}
          onChange={changeVarHandle}
        />
        {proc ? (
          <div className="input-group-append">
            <span className="input-group-text">%</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

NumInput.defaultProps = {
  dollar: false,
  proc: false,
}

NumInput.propTypes = {
  variable: PropTypes.number.isRequired,
  changeVarHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  dollar: PropTypes.bool,
  proc: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

export default NumInput
