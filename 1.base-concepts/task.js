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
  let arr = [percent, contribution, amount, countMonths];

  arr.forEach(element => {
    if (typeof(element) === String) {
      element = +element;
    } else {
      return false;
    }
  });

  let percentPerMonth = arr.percent / 1200;
  let amountOfCredit = arr.amount - arr.contribution;
  let monthlyPayment = amountOfCredit * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth).Math.pow(countMonths)) - 1)));
  let totalAmount = +(monthlyPayment * 12).toFixed(2);
  return totalAmount;
}