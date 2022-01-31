//A program that takes all of the five letter words and uses the letter frequency data
//to rank them from those with the highest number of frequent letters to the least and
//writes this data to a new file.

//Create a class to hold the text for a word and it's letter frequency score
class Word{
    constructor(text,lfScore){
        this.text = text;
        this.lfScore = lfScore;
    }
}

//Assign letter frequency data from file to array
const letterFrequencies = getLFDataFromFile();
//Assign 5 letter word data from file to array
const fiveLetterWords = getFileData('words5letters.txt').split('\n');
//Create an array to store instances of Word class for each of the 5 letter words
let wordObjects = [];
//Iterate through fiveLetterWords and for earh word, create a Word object, calculate and
//and LFScore to the object and add object to wordObjects
fiveLetterWords.forEach(word => {
    const lfScore = calculateLFScore(word);
    const obj = new Word(word, lfScore);
    wordObjects.push(obj);
})
//Sort through wordObjects by LFScore so that they are in descending order
wordObjects.sort((a,b) => b.lfScore-a.lfScore);
//Write the objects to file
writeWordObjectsToFile(wordObjects);

//Create a fucntions that receives a word and returns its letter frequency score
//ALF is calculated by adding the frequencies of all the unique letters, as we want 
//to prioritise letters with more unique letters to eliminate more possible letters each round.
function calculateLFScore(word){
    //Convert word into an array
    letters = word.split('');
    //Sort into alphabetical order
    letters = letters.sort();
    //Create a variable to store the LFScore to return
    let lfScore = 0;
    //Create a varaible to store the last letter to check for duplicates during iteration
    let lastLetter; 
    //Iterate through letters and add LF score of letter to lfScore if it is not a duplicate
    letters.forEach(letter =>{
        if (letter != lastLetter){
            lfScore += parseInt(getLetterFrequency(letter));
        }
        lastLetter = letter;
    })
    return lfScore;
}

//Create a function to obtain the LF for a particular letter
function getLetterFrequency(letter){
    //Obtain index for letter
    const index = getArrayIndex(letter);
    //Return LF for the index from letterFrequencies array
    return letterFrequencies[index];
}


//Create a function to return an array of letterFrequencies from the file data
function getLFDataFromFile(){
    //Split file data by \n for an array of letter and number pairs
    const pairs = getFileData('letter-frequencies.txt').split('\n');
    //Remove the last empty entry
    pairs.pop(); 
    //Create an array to fill and return
    let letterFrequencies = new Array(26);
    //Iterate through pairs and create an array of letterFrequencies where
    // 0=a, 1=b etc
    pairs.forEach(pair => {
        //Split pair into character and frequency
        pair = pair.split(',');
        //Get index from character
        const index = getArrayIndex(pair[0]);
        //Update array at index with frequency
        letterFrequencies[index] = pair[1];
    })
    return letterFrequencies;
}

//Create a file that returns data from a provided file
function getFileData(file){
    fs = require('fs');
    return fs.readFileSync(file, 'utf-8');
}

//Create a function that receives a lower case character and returns the correct
//array index. (a = 0, b = 1 etc)
function getArrayIndex(char){
    //Get the unicode for the character
    let code = char.charCodeAt(0);
    //Return the code - 97 (unicode for 'a'), which will return the correct index (0-25)
    return code - 97
}

//Create a file that takes the new array of Word objects and writes it to a file
function writeWordObjectsToFile(wordObjects){
    //Create a variable to save the data to
    let data = "";
    //Iterate through the array and add all the data to the string
    wordObjects.forEach(obj => {
        data += obj.text + ',' + obj.lfScore + ';';
    })
    //Create file with data
    fs = require('fs');
    fs.writeFileSync('wordle-words.txt', data);
    
}