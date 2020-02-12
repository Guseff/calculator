import React from 'react'
import PropTypes from 'prop-types'

import ButtonsDealer from '../ButtonsDealer'
import ResultField from '../ResultField/ResultField'
import { calcTaxes, showPrice } from '../../utils'
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
  sum,
  dealer,
}) => {
  return (
    <div className="container rounded border border-primary py-3 mt-1">
      <h4>Info Card</h4>
      <ButtonsDealer
        text="Choose Auto:"
        prefix="deal"
        variables={dealerList}
        changeVarHandle={getDealerInfoCard}
        dealer={dealer}
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
      {isDataLoaded && !loadingData ? (
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
              .map(x => `${showPrice(x)}, `)
              .join(' ')
              .slice(0, -2)}
          </div>
        </div>
      ) : null}
      <ResultField text="Estimate Monthly Payment" value={sum} />
    </div>
  )
}

DealerInfoField.defaultProps = {
  msrp: 0,
  vehicleName: '',
  dealerName: '',
  dealerPhone: '',
  dealerRating: '',
  dealer: '',
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
  sum: PropTypes.number.isRequired,
  dealer: PropTypes.string,
}

export default DealerInfoField
