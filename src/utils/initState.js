import { loadString, loadFloat, loadInteger } from './utils'

const initState = () => {
  return {
    msrp: loadInteger('msrp'),
    loadingData: false,
    isDataLoaded: false,
    loading: false,
    isLoan: true,
    postCode: loadString('postCode', '0'),
    downPayment: loadInteger('downPayment'),
    downPaymentErr: false,
    tradeIn: loadInteger('tradeIn'),
    tradeInErr: false,
    creditScore: loadInteger('creditScore', 750),
    sum: 0,
    leaseTerm: loadInteger('leaseTerm', 36),
    mileage: loadInteger('mileage', 12000),
    loanTerm: loadInteger('loanTerm', 24),
    apr: loadFloat('loanApr'),
    dealer: '',
  }
}

export default initState
