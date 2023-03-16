"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2 - 4*a*c;

  if (d > 0) {
    arr.push( (-b + Math.sqrt(d) )/(2*a) );
    arr.push( (-b - Math.sqrt(d) )/(2*a) );
  } else if (d === 0) {
    arr.push(-b / (2*a) );
  }; 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
    return false;
  } else {
    let percentPerMonth = percent / 1200;
    let amountOfCredit = amount - contribution;
    let monthlyPayment = amountOfCredit * (percentPerMonth + (percentPerMonth / ((Math.pow((1 + percentPerMonth), countMonths)) - 1)));
    let totalAmount = (monthlyPayment * countMonths).toFixed(2);
    totalAmount = +totalAmount;
    return totalAmount;
  }
}