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

export const loanCalc = (sum, term, score, apr) =>
  Math.round(
    ((sum * apr) / 12) * getFactorFromScore(score) + (sum * 100) / term
  ) / 100

export const leaseCalc = (sum, term, score, mileage) =>
  ((sum * mileage) / 10000 / term) * getFactorFromScore(score)
