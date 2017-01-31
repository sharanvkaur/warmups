var helper = require('./test-helper-functions')

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)
function dash (numString) {
  var output = ''
  for (var i = 0; i < numString.length; i++) {
    if (numString.charAt(i) % 2 === 0 && numString.charAt(i + 1) && numString.charAt(i + 1) % 2 === 0) {
      output += numString.charAt(i) + '-'
    } else {
      output += numString.charAt(i)
    }
  }
  return output
}
console.log(dash('025486'));
helper.test(dash('025486'), '0-254-8-6') // check that your function works as expected

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem (arr) {
  var counts = {}
  for (var i=0; i<arr.length; i++) {
    var item = arr[i]
    counts[item] = (counts[item] || 0) + 1
  }
  var mostFreqItem = ""
  var mostFreq = 0
  for (num in counts) {
    if (counts[num] > mostFreq) {
      mostFreq = counts[num]
      mostFreqItem = num
    }
  }
  return mostFreqItem + ' (' + mostFreq + ' times)'
}
console.log(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 9, 3]));
helper.test(mostFrequentItem([3, 'b', 'b', 'b', 2, 3, 'b', 3, 'b', 2, 4, 9, 3]), 'b (5 times)')

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems (arr) {
  var answerArray = arr.filter(function(element, index, arr) {
    var prewItem = ''
    if (arr[index-1]) prewItem = arr[index-1]
    return element.toString().toLowerCase() !== prewItem.toString().toLowerCase()
  })
return answerArray
}
console.log(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]));

helper.test(removeDuplicateItems([1, 'a', 'A', 'b', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union (arr1, arr2) {
  var arrRemovedDupes = arr2.sort().filter(function(element) {
    return arr1.indexOf(element) === -1
  })
  return arr1.concat(arrRemovedDupes)
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

helper.test(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

// /* ---------------------- EXERCISE 5 ---------------------- */
// // Write a JavaScript function to merge two arrays and removes all duplicates elements.
// // (Sample input: mergeArray([1, 2, 3], [2, 30, 1]), expected output: [3, 2, 30, 1])
function mergeArray (arr2, arr1) {
  var arrRemovedDupes = arr2.filter(function(element) {
    return arr1.indexOf(element) === -1
  })
  return arrRemovedDupes.concat(arr1)
}
console.log(mergeArray([1, 2, 3], [2, 30, 1]));

helper.test(mergeArray([1, 2, 3], [2, 30, 1]), [3, 2, 30, 1])
