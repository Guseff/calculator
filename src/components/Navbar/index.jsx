import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
  const classes = 'btn btn-outline-secondary rounded-0'
  const noBorder = ' border-bottom-0'
  const { isLoan, changeTab } = props
  return (
    <div className="btn-group d-flex">
      <button
        className={classes + (isLoan ? noBorder : '')}
        type="button"
        onClick={changeTab}
        disabled={isLoan}
      >
        Loan
      </button>
      <button
        className={classes + (!isLoan ? noBorder : '')}
        type="button"
        onClick={changeTab}
        disabled={!isLoan}
      >
        Lease
      </button>
    </div>
  )
}

Navbar.propTypes = {
  isLoan: PropTypes.bool.isRequired,
  changeTab: PropTypes.func.isRequired,
}

export default Navbar
