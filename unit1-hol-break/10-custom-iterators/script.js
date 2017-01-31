testArray = [ 1, 2, 3, 4, 5, 6]

function testCallback (ele, ind, arr) {
  return ele * 5
}

function testCallback1 (ele, ind, arr) {
  console.log(ele, ind, arr)
  return ele * 5
}

// ======================================

function forEach (array, callback) {
  for (var i = 0; i < array.length; i++) {
    (callback(array[i], i, array))
  }
}

forEach(testArray, testCallback1)
console.log('======================================')

// =======================================

function map (array, callback) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array))
  }
  return newArray
}

console.log('answer is', map(testArray, testCallback))

// ======================================

function reduce (array, callback, initial) {
  if (typeof initial !== 'undefined') {
    var sum = initial
    var start = 0
  } else {
    var sum = callback(array[0], 0, array)
    var start = 1
  }
  for (i = start; i < array.length; i++) {
    sum += callback(array[i], i, array)
  }
  return sum
}
console.log('answer is sum*5 which is', reduce(testArray, testCallback))

// ======================================

function testFilter (ele, ind, arr) {
  if (ele % 2 === 0) {
    return ele
  }
}

function filter (array, callback) {
  var filteredArray = []
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(callback(array[i]))
    }
  }
  return filteredArray
}

console.log('answer is ', filter(testArray, testFilter))

// ======================================

function every (array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false
    } else {
      return true
    }
  }
}

console.log('answer is ', every(testArray, testCallback))
console.log('answer is ', every(testArray, testFilter))
