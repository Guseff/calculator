import React from 'react'
import PropTypes from 'prop-types'

import ButtonsDealer from '../ButtonsDealer'
import { calcTaxes } from '../../utils/calculate'
import { dealerList } from '../../constants/data'

const DealerInfoField = ({
  postCode,
  msrp,
  vehicleName,
  dealerName,
  dealerPhone,
  dealerRating,
  getDealerInfoCard,
  loadingData,
  isDataLoaded,
}) => {
  return (
    <div className="container rounded border border-primary py-3 mt-1">
      <h4>Info Card</h4>
      <ButtonsDealer
        text="Choose Dealer:"
        prefix="deal"
        variables={dealerList}
        changeVarHandle={getDealerInfoCard}
      />
      {loadingData ? (
        <div className="d-flex justify-content-center container rounded border border-primary py-3 mt-3 h-50">
          <div
            className="spinner-border text-primary align-self-center"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
      {isDataLoaded ? (
        <div>
          <div className="font-italic">
            Manufacturers Suggested Retail Price
          </div>
          <div className="font-weight-bold text-primary mb-2">{`$${msrp}-`}</div>

          <div className="font-italic">Vehicle Model</div>
          <div className="font-weight-bold text-primary mb-2">
            {vehicleName}
          </div>

          <div className="font-italic">Dealer</div>
          <div className="font-weight-bold text-primary mb-2">{dealerName}</div>

          <div className="font-italic">Dealer Phone</div>
          <div className="font-weight-bold text-primary mb-2">
            {dealerPhone}
          </div>

          <div className="font-italic">Dealer Rating</div>
          <div className="font-weight-bold text-primary mb-2">
            {dealerRating}
          </div>

          <div className="font-italic">Taxes</div>
          <div className="font-weight-bold text-primary">
            {calcTaxes(postCode)
              .map(x => `$${x}-, `)
              .join(' ')}
          </div>
        </div>
      ) : null}
    </div>
  )
}

DealerInfoField.defaultProps = {
  msrp: 0,
  vehicleName: '',
  dealerName: '',
  dealerPhone: '',
  dealerRating: '',
}

DealerInfoField.propTypes = {
  postCode: PropTypes.string.isRequired,
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
