
fs = require('fs');
//Read a string of all the words from the file
const stringOfWords = fs.readFileSync('./enable1.txt', 'utf-8');
//Split the string by \n to return an array of all the words
const arrayOfWords = stringOfWords.split('\r\n');
//Create an array of 5 letter words by filtering arrayOfWords by length
const arrayOf5LetterWords = arrayOfWords.filter(word => word.length === 5);
//Iterate through 5 letter words and write to a new file
fs.writeFileSync('./words5letters.txt', '');
arrayOf5LetterWords.forEach(word => fs.appendFileSync('./words5letters.txt', word + '\n'));




