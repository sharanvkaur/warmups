var thisArray = [5, 2, 3, 1, 8, 9, 0, 10, 4, 7, 6, 99]

function swap (items, firstIndex, secondIndex) {
  var temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

function selectionSort (items) {
  var min
  for (i = 0; i < items.length; i++) {
    min = i
    for (j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j
      }
    }
    if (i != min) {
      swap(items, i, min)
    }
  }
  return items
}

console.log(thisArray);
console.log(selectionSort(thisArray))
