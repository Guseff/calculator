import React from 'react'

const Navbar = () => {
  return (
    <div className="btn-group d-flex">
      <button className="btn btn-outline-secondary rounded-0" type="button">
        Loan
      </button>
      <button
        className="btn btn-outline-secondary border-bottom-0 rounded-0"
        type="button"
        disabled
      >
        Lease
      </button>
    </div>
  )
}

export default Navbar
