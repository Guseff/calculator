import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Navbar = ({ isLoan, changeTab }) => {
  const classes = 'btn btn-outline-secondary rounded-0'
  const noBorder = ' border-bottom-0'

  const buttonLoanClassName = classNames(classes, {
    [noBorder]: isLoan,
  })

  const buttonLeaseClassName = classNames(classes, {
    [noBorder]: !isLoan,
  })

  return (
    <div className="btn-group d-flex">
      <button
        className={buttonLoanClassName}
        type="button"
        onClick={changeTab}
        disabled={isLoan}
      >
        Loan
      </button>
      <button
        className={buttonLeaseClassName}
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
