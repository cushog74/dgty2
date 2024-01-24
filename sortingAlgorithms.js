const randomizeArray = require("randomize-array");

function generateRandomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
}

function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

function improvedBubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

function shakeSort(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex < rightIndex) {
    if (array[leftIndex] > array[rightIndex]) {
      [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
    }
    if (array[leftIndex] < array[rightIndex]) {
      [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
    }
    leftIndex++;
    rightIndex--;
  }
  return array;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

function shellSort(array) {
  let n = array.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = 0; i < n; i++) {
      if (i >= gap) {
        if (array[i] < array[i - gap]) {
          [array[i], array[i - gap]] = [array[i - gap], array[i]];
        }
      }
    }
    gap = Math.floor(gap / 2);
  }
  return array;
}

module.exports = {
  generateRandomArray,
  bubbleSort,
  improvedBubbleSort,
  shakeSort,
  selectionSort,
  insertionSort,
  shellSort,
};

"dependencies": {
    "randomize-array": "^1.0.0"
  };