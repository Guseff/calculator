import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { calcTaxes } from '../../utils/calculate'

class DealerInfoField extends Component {
  isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      // loading: false,
      // isData: false,
    }
  }

  render() {
    // const { isData, loading } = this.state
    const {
      postCode,
      msrp,
      vehicleName,
      dealerName,
      dealerPhone,
      dealerRating,
      getDealerInfoCard,
      loadingData,
      isDataLoaded,
    } = this.props

    if (loadingData) {
      return (
        <div className="d-flex justify-content-center container rounded border border-primary py-3 mt-1 h-50">
          <div
            className="spinner-border text-primary align-self-center"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div className="container rounded border border-primary py-3 mt-1">
        <h4>Info Card</h4>
        {!isDataLoaded ? (
          <button
            type="button"
            className="btn btn-outline-primary btn-sm mt-1"
            onClick={getDealerInfoCard}
          >
            Get Dealer Offer
          </button>
        ) : (
          <div>
            <div className="font-italic">
              Manufacturers Suggested Retail Price
            </div>
            <div className="font-weight-bold text-primary mb-3">{`$${msrp}-`}</div>

            <div className="font-italic">Vehicle Model</div>
            <div className="font-weight-bold text-primary mb-3">
              {vehicleName}
            </div>

            <div className="font-italic">Dealer</div>
            <div className="font-weight-bold text-primary mb-3">
              {dealerName}
            </div>

            <div className="font-italic">Dealer Phone</div>
            <div className="font-weight-bold text-primary mb-3">
              {dealerPhone}
            </div>

            <div className="font-italic">Dealer Rating</div>
            <div className="font-weight-bold text-primary mb-3">
              {dealerRating}
            </div>

            <div className="font-italic">Taxes</div>
            <div className="font-weight-bold text-primary">
              {calcTaxes(postCode)
                .map(x => `$${x}-, `)
                .join(' ')}
            </div>
          </div>
        )}
      </div>
    )
  }
}

DealerInfoField.defaultProps = {
  msrp: 0,
  vehicleName: '',
  dealerName: '',
  dealerPhone: '',
  dealerRating: '',
}

DealerInfoField.propTypes = {
  postCode: PropTypes.number.isRequired,
  msrp: PropTypes.number,
  vehicleName: PropTypes.string,
  dealerName: PropTypes.string,
  dealerPhone: PropTypes.string,
  dealerRating: PropTypes.string,
  getDealerInfoCard: PropTypes.func.isRequired,
  loadingData: PropTypes.bool.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
}

export default DealerInfoField
