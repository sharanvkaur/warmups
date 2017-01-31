const wordsToAction ={
  'plus' : '+',
  'minus' : '-',
  'times' : '*',
  'multiply' : '*',
  'dividedby' : '/',
  'one' : 1,
  'two' : 2,
  'three' : 3,
  'four' : 4,
  'five' : 5,
  'six' : 6,
  'seven' : 7,
  'eight' : 8,
  'nine' : 9,
  'ten' : 10,
  'eleven' : 11,
  'twelve' : 12,
  'thirteen' : 13,
  'fourteen' : 14,
  'fifteen' : 15,
  'sixteen' : 16,
  'seventeen' : 17,
  'eighteen' : 18,
  'nineteen' : 19,
  'twenty' : 20,
}

function calc(werds) {
  console.log(werds);
}

function engCalc(string) {

  var werdsArray = string.toLowerCase().split(" ")
  console.log(werdsArray);
  var newArray = []
    for (i = 0; i < werdsArray.length; i++) {
      for (chicken in wordsToAction){
        if (werdsArray[i] === chicken){
          newArray.push(wordsToAction[chicken])
          break
        }
      }
    }
    console.log(newArray);
    for (i=0; i< newArray.length; i++) {
      if (newArray[i] === '*') {
        subTotal = newArray[i-1] * newArray[i+1]
        newArray.splice(i-1, 3, subTotal)
      }
    }
    for (i=0; i< newArray.length; i++) {
      if (newArray[i] === '+') {
        subTotal = newArray[i-1] + newArray[i+1]
        newArray.splice(i-1, 3, subTotal)
      }
    }
    for (i=0; i< newArray.length; i++) {
      if (newArray[i] === '-') {
        subTotal = newArray[i-1] - newArray[i+1]
        newArray.splice(i-1, 3, subTotal)
      }
    }
    return newArray[0]
  }


test = "two times nine plus eight minus three times four"
calc(engCalc(test))
