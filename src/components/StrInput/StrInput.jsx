import React from 'react'
import PropTypes from 'prop-types'

const StrInput = ({
  variable,
  changeVarHandle,
  adornAprHandle,
  text,
  name,
  dollar,
  proc,
}) => {
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
          type="string"
          className="form-control text-right"
          id={`input-${name}`}
          name={`input-${name}`}
          value={variable}
          onChange={changeVarHandle}
          onBlur={adornAprHandle}
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

StrInput.defaultProps = {
  dollar: false,
  proc: false,
  adornAprHandle: () => {},
}

StrInput.propTypes = {
  variable: PropTypes.string.isRequired,
  changeVarHandle: PropTypes.func.isRequired,
  adornAprHandle: PropTypes.func,
  text: PropTypes.string.isRequired,
  dollar: PropTypes.bool,
  proc: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

export default StrInput
