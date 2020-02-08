import React from 'react'

const LoanTab = () => {
  return (
    <form className="form-horizontal">
      <div className="form-group row">
        <div className="col-md-7">
          <div className="">Vehicle Sales Price:</div>
        </div>
        <div className="input-group col-md-5">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            type="number"
            className="form-control text-right"
            id="input-price"
            name="input-price"
          />
        </div>
      </div>
    </form>
  )
}

export default LoanTab
