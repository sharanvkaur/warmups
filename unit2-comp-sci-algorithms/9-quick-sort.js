function swap (items, firstIndex, secondIndex) {
  var temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

function partition (items, pivot, left, right) {
  var pivotValue = items[pivot]
  var partitionIndex = left

  for (var i = left; i < right; i++) {
    if (items[i] < pivotValue) {
      swap(items, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(items, right, partitionIndex)
  return partitionIndex
}

function quickSort (items, left, right) {
  var length = items.length
  var pivot
  var partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(items, pivot, left, right)

    quickSort(items, left, partitionIndex - 1)
    quickSort(items, partitionIndex + 1, right)
  }
  return items
}

var testArray = [ 25, 6, 17, 3, 22, 69, 1, 0, 18, 40, 32, 41, 75 ]
console.log(testArray)
console.log(quickSort(testArray, 0, testArray.length - 1))
