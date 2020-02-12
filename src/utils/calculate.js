const getFactorFromScore = score => {
  if (score < 640) {
    return 1.2
  }
  if (score < 700) {
    return 1.05
  }
  if (score < 750) {
    return 1
  }
  return 0.95
}

const loanCalc = (sum, term, score, apr) =>
  Math.round(sum * ((apr / 12) * getFactorFromScore(score) + 100 / term)) / 100

const leaseCalc = (sum, term, score, mileage) =>
  Math.round(
    (sum * getFactorFromScore(score) * (mileage / 10000) * 100) / term
  ) / 100

export const calcPayment = (
  isLoan,
  sum,
  loanTerm,
  leaseTerm,
  score,
  mileage,
  apr
) =>
  isLoan
    ? loanCalc(sum, loanTerm, score, apr)
    : leaseCalc(sum, leaseTerm, score, mileage)

export const calcTaxes = code =>
  code
    .toString(10)
    .split('')
    .map(x => x * 11)

export const checkLimitsOut = (value, high) => value < 0 || value > high / 4
