import React, { Component } from 'react'
import PropTypes from 'prop-types'

import data from '../../constants/data'
import { calcTaxes } from '../../utils/calculate'

class DealerInfoField extends Component {
  isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  componentDidMount() {
    this.isMounted = true
    this.setState({ loading: true })

    const promise = new Promise(res => setTimeout(() => res(data), 3000))

    promise.then(result => {
      if (this.isMounted) {
        this.setState({ msrp: result.msrp })
        this.setState({ vehicleName: result.vehicleName })
        this.setState({ dealerName: result.dealerName })
        this.setState({ dealerPhone: result.dealerPhone })
        this.setState({ dealerRating: result.dealerRating })
        this.setState({ loading: false })
      }
    })
  }

  componentWillUnmount() {
    this.isMounted = false
  }

  render() {
    const {
      loading,
      msrp,
      vehicleName,
      dealerName,
      dealerPhone,
      dealerRating,
    } = this.state
    const { postCode } = this.props

    if (loading) {
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
        <div className="font-italic">Manufacturers Suggested Retail Price</div>
        <div className="font-weight-bold text-primary mb-3">{`$${msrp}-`}</div>

        <div className="font-italic">Vehicle Model</div>
        <div className="font-weight-bold text-primary mb-3">{vehicleName}</div>

        <div className="font-italic">Dealer</div>
        <div className="font-weight-bold text-primary mb-3">{dealerName}</div>

        <div className="font-italic">Dealer Phone</div>
        <div className="font-weight-bold text-primary mb-3">{dealerPhone}</div>

        <div className="font-italic">Dealer Rating</div>
        <div className="font-weight-bold text-primary mb-3">{dealerRating}</div>

        <div className="font-italic">Taxes</div>
        <div className="font-weight-bold text-primary">
          {calcTaxes(postCode)
            .map(x => `$${x}-, `)
            .join(' ')}
        </div>
      </div>
    )
  }
}

DealerInfoField.propTypes = {
  postCode: PropTypes.number.isRequired,
}

export default DealerInfoField
