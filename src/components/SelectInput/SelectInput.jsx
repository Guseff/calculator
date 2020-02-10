import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({ text, prefix, value, variables, changeVarHandle }) => {
  return (
    <div className="form-group row">
      <div className="col-md-5">
        <div className="">{text}</div>
      </div>
      <div className="col-md-7">
        <select
          className="form-control form-control-sm"
          value={value}
          id={prefix}
          onChange={changeVarHandle}
        >
          {variables.map(x => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

SelectInput.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeVarHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default SelectInput
