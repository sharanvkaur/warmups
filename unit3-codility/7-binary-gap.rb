function findBinaryGap (N) {
  console.log('===================================================');
  console.log('the number we are looking at is:   ',N)

  var binaryString = N.toString(2)
  console.log('when converted to binary, this is: ', binaryString)

  var currentGap = 0
  var solutionGap = 0

  var startFromEnd = binaryString.length - 1

  for (startFromEnd; startFromEnd >= 0; startFromEnd--) {
    if (binaryString.charAt(startFromEnd) != '0') {
      break
    }
  }
  for (var i = startFromEnd-1; i >= 0; i--) {
    if (binaryString.charAt(i) == '0') {
      currentGap++
    } else {
      if (currentGap > solutionGap) {
        solutionGap = currentGap
      }
      currentGap = 0
    }
  }
  return 'the longest sequence of zeroes is:  ' + solutionGap
}

console.log(findBinaryGap(10));
console.log(findBinaryGap(155));
console.log(findBinaryGap(68));
console.log(findBinaryGap(10234345));
console.log(findBinaryGap(1043));