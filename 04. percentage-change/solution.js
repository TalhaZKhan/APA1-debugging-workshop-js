function calculatePercentageChange(original, newAmount) {
  if(original == newAmount){
    return 0
  }
  const difference = newAmount - original;
  const percentageDifference = (difference/original) * 100;
  return Number(percentageDifference.toFixed(0));
}

module.exports = { calculatePercentageChange };
