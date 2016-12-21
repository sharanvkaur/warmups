// numString = "18247913859"
// console.log('string: ' + numString);
//
// numArray = numString.split("").map(Number)
// console.log('array of digits: ' + numArray)
//
// var Answer = numArray.reduce(function(a,b) {
//   return Number(a) + Number(b)
// })
// console.log('=> answer: ' + Answer)
// console.log('======================================');

numString = "183958345"
console.log('string: ' + numString);

numArray = numString.split("")
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] === '-') {
    var negNumArr = numArray.splice(i, 2)
    var negNum = negNumArr.join("")
    numArray.splice(i,0,(negNum))
    console.log(negNum);
  }
}
console.log(numArray)

var Answer = numArray.reduce(function(a,b) {
  return Number(a) + Number(b)
})

console.log('=> answer: ' + Answer)
console.log('======================================');
