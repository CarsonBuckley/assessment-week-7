
let numberArray = [1, 2, 3, 4, -3]

function sumToZero(array) {

    for (i = 0; i < array.length; i++) {
        if (array.includes(-(i))) {
            return true
        }
    }
    return false
}

console.log(sumToZero(numberArray))

// ------------------------------------------------------------------------

function isIsogram (string) {
    return !/(.).*\1/.test(string);
}

console.log(isIsogram('Monday'))

// ------------------------------------------------------------------------

function isPangram(string){
    let stringArray = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(stringArray.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog'))

// ------------------------------------------------------------------------

let wordArray = ['hi', 'hello', 'howdydoo', 'kjsdahflskjdhfsakljfhadslkjfhaskjldfh']

function findLongestWord(array) {

    let lengthArray = []

    for (i = 0; i < array.length; i++) {
        let wordLength = array[i].length
        lengthArray.push(wordLength)
    }
    console.log(Math.max.apply(null, lengthArray))
}

console.log(findLongestWord(wordArray))