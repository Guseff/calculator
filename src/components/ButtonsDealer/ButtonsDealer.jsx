import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonsDealer = ({
  text,
  prefix,
  variables,
  changeVarHandle,
  dealer,
}) => {
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
            className={classNames('btn w-100', {
              'btn-primary': dealer === x,
              'btn-outline-primary': dealer !== x,
            })}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  )
}

ButtonsDealer.defaultProps = {
  dealer: '',
}

ButtonsDealer.propTypes = {
  variables: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeVarHandle: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  dealer: PropTypes.string,
}

export default ButtonsDealer
