function getArrayParams(...arr) {
  let numArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    numArray.push(arr[i]);
  }
  let min = numArray[0];
  let max = numArray[0];
  let sum = 0;

  for (let j = 0; j < numArray.length; j++) {
    if (numArray[j] > max) {
      max = numArray[j];
    }
    if (numArray[j] < min) {
      min = numArray[j];
    }
    sum += numArray[j];
  }
  
  let avg = sum / numArray.length;
  avg = avg.toFixed(2);
  avg = +avg;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
