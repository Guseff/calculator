import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonRow = ({ text, prefix, active, variables, changeVarHandle }) => {
  return (
    <div className="form-group row">
      <div className="col-md-5">
        <div className="">{text}</div>
      </div>
      <div className="btn-group btn-group-sm col-md-7" role="group">
        {variables.map(x => (
          <button
            key={x}
            type="button"
            id={`${prefix}-${x}`}
            onClick={changeVarHandle}
            className={classNames('btn btn-outline-primary w-100', {
              active: active === x,
            })}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  )
}

ButtonRow.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeVarHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
}

export default ButtonRow
