# wordle-solver
An app for solving the popular Wordle game.

I used two dictionary lists from https://github.com/dolph/dictionary (popular.txt and enable1.txt - the first returning the correct words more quickly but the latter being a more extensive list of words). I later discovered that the list of words used by Wordle is hard coded into their JS, so I used this list instead in the final product.

I developed nodeJS apps to filter these lists down to just the five letter words, calculate the frequency of every letter of the alphabet in these words, scored every word based on the frequency of its letters and finally order them based on this score. However,  I have subsequently moved this functionality into the JS code of the website, so all that is required is to provide the website with a list of words and it sorts them itself.

I then turned this into a website that provides the user with the best word to play and provides them with their next best word based on their input that they provide from Wordle. I am continuing to modify and optimise the algorith tham provides the next word to try to ensure that it can correctly guess any of the provided words within the 6 guesses provided by Wordle.

I have continued to improve the algortithm for choosing the best word until I arrived at the current version. I have used a nodeJS app to test the algorithm with all of the words in the Wordle dictionary. It solves 97.5% of them within the required 6 guesses and takes no more than 9 guesses to solve the rest.