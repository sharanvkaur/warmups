var thisArray = [5, 2, 3, 6, 1, 8, 0, 7, 99]

function insertionSort (arr) {
  for (var i = 0; i < arr.length; ++i) {
    var temp = arr[i]
    for ( j = i - 1; j > -1 && arr[j] > temp; j--){
      arr[j+1] = arr[j]
    }
    arr[j+1] = temp
  }
  return arr
}

console.log(thisArray)
console.log(insertionSort(thisArray))
