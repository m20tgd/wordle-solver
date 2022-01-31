//A program to create a file containing the frequency of all the individual letters
//for the 5 letter words

//Create an array with 26 to store the frequencies of each letter
let letterFrequenices = new Array(26);
//Set all of the elements to 0
for (i=0;i<letterFrequenices.length;i++){
    letterFrequenices[i] = 0;
}

fs = require('fs');
//Read words from file and split into array
const arrayOf5LetterWords = fs.readFileSync('./words5letters.txt', 'utf-8').split(',');

//Update letter freqeuncies for every word in array
arrayOf5LetterWords.forEach(word => updateLetterFrequency(word));
//Write the frequencies to a file
writeFrequenciesToFile();

//Create a function that takes a word and updates letterFrequencies depending on
//the letters in the word
function updateLetterFrequency(word){
    //Turn the string into an array
    const array = word.split('');
    //For each letter in the word, update the relevant index of letterFrequencies
    array.forEach(char => {
        //Call getArrayIndex to get the index for the letter
        const index = getArrayIndex(char);
        //Increase the relevant index of letterFrequencies by 1
        letterFrequenices[index] += 1;
    })
}

//Create a function that receives a lower case character and returns the correct
//array index. (a = 0, b = 1 etc)
function getArrayIndex(char){
    //Get the unicode for the character
    let code = char.charCodeAt(0);
    //Return the code - 97 (unicode for 'a'), which will return the correct index (0-25)
    return code - 97
}

//Write a function to print the frequencies to the console if required.
function printFrequencies(){
    for (i=0;i<letterFrequenices.length;i++){
        console.log(String.fromCharCode(i + 97) + " = " + letterFrequenices[i]);
    }
}

//Create fucntion to write the frequencies to a file
function writeFrequenciesToFile(){
    for (i=0;i<letterFrequenices.length;i++){
        fs.appendFileSync('./letter-frequencies.txt', String.fromCharCode(i + 97) + "," + letterFrequenices[i] + '\n');
    }
}