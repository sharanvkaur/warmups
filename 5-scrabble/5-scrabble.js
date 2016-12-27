var fs = require('fs')
var textData = fs.readFileSync('./enable1.txt', 'utf-8')
dictArray = textData.split('\r\n')

// const pointsMapping = {
//   'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4, 'i': 1,
//   'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3, 'q': 10,
//   'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'x': 8, 'y': 4, 'z': 10
// }

function scrabble (inputString, outputString) {
  for (var i = 0; i < outputString.length; i++) {
    letter = outputString.charAt(i)
    if (inputString.indexOf(letter) === -1) {
      if (inputString.indexOf('?') === -1) { return false }
    }
    if (inputString.indexOf(letter) === -1) {
      letterIndex = inputString.indexOf('?')
    } else {
      letterIndex = inputString.indexOf(letter)
    }
    inputString = inputString.slice(0, letterIndex) + inputString.slice(letterIndex + 1, inputString.length)
  }
  return true
}

function longest (inputString, dictionary) {
  longestWord = ''
  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i].length > longestWord.length && scrabble(inputString, dictionary[i]) === true) {
      longestWord = dictionary[i]
    }
  }
  return longestWord
}


console.log(scrabble('ladilmy', 'daily'))
console.log(scrabble('eerriin', 'eerie'))
console.log(scrabble('orrpgma', 'program'))
console.log(scrabble('orppgma', 'program'))
console.log(scrabble('pizza??', 'pizzazz'))
console.log(scrabble('piizza?', 'pizzazz'))
console.log(scrabble('b??????', 'program'))
console.log(scrabble('a??????', 'program'))

console.log(longest('dcthoyueorza', dictArray))
console.log(longest('uruqrnytrois', dictArray))
console.log(longest('rryqeiaegicgeo??', dictArray))
console.log(longest('udosjanyuiuebr??', dictArray))
console.log(longest('vaakojeaietg????????', dictArray))
