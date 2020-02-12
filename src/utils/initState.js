const initState = () => {
  return {
    msrp: +localStorage.getItem('msrp') || 0,
    loadingData: false,
    isDataLoaded: false,
    loading: false,
    isLoan: true,
    postCode: localStorage.getItem('postCode') || '0',
    downPayment: +localStorage.getItem('downPayment') || 0,
    downPaymentErr: false,
    tradeIn: +localStorage.getItem('tradeIn') || 0,
    tradeInErr: false,
    creditScore: +localStorage.getItem('creditScore') || 750,
    sum: 0,
    leaseTerm: +localStorage.getItem('leaseTerm') || 36,
    mileage: +localStorage.getItem('mileage') || 12000,
    loanTerm: +localStorage.getItem('loanTerm') || 24,
    apr: localStorage.getItem('loanApr') || '0',
  }
}

export default initState
