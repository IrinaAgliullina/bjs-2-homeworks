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
  let numArray = [];
  for (let i = 0; i < arr.length; i++) {
    numArray.push(arr[i]);
  }

  if (numArray.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let j = 0; j < numArray.length; j++) {
    sum += numArray[j];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let numArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    numArray.push(arr[i]);
  }

  if (numArray.length === 0) {
    return 0;
  }

  let min = numArray[0];
  let max = numArray[0];
  for (let j = 0; j < numArray.length; j++) {
    if (numArray[j] > max) {
      max = numArray[j];
    }
    if (numArray[j] < min) {
      min = numArray[j];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let numArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    numArray.push(arr[i]);
  }

  if (numArray.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let j = 0; j < numArray.length; j++) {
    if (numArray[j] % 2 === 0) {
      sumEvenElement += numArray[j];
    } else {
      sumOddElement += numArray[j];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let numArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    numArray.push(arr[i]);
  }

  if (numArray.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let j = 0; j < numArray.length; j++) {
    if (numArray[j] % 2 === 0) {
      sumEvenElement += numArray[j];
      countEvenElement += 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(arrOfArr[i]);

    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }
  
  return maxWorkerResult;
}