var helper = require('./test-helper-functions')

// EXERCISE ONE - Write a JavaScript function to remove a specific element from an array.
function removeArrayElement (arr, ele) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== ele) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
helper.test(removeArrayElement([2, 5, 9, 6], 5), [2, 9, 6])

// EXERCISE TWO - Write a JavaScript function to get nth largest element from an unsorted array.
function nthLargest (array, nth) {
  var sorted = array.sort(function(a, b) {
    return a-b
  })
  return sorted[sorted.length - nth]
}
helper.test(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4), 89)

// EXERCISE THREE - INCOMPLETE/DOES NOT WORK - Write a JavaScript function to get a random item from an array.
function randomItem (array) {
  var index = Math.floor(Math.random() * (array.length))
  return array[index]
}
helper.test(randomItem(['hello', 'hi', 'bye']), 'hello' || 'hi' || 'bye')

// EXERCISE FOUR - Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by a specific step from starting position.
function arrayRange (start, noSteps, sizeSteps) {
  var genArray = []
  for ( var i = start; i < start+noSteps*sizeSteps; i += sizeSteps) {
    genArray.push(i)
  }
  return genArray
}
helper.test(arrayRange(1, 4, 1), [1, 2, 3, 4])
helper.test(arrayRange(-6, 5, 2), [-6, -4, -2, 0, 2])
