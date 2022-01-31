# wordle-solver
An app for solving the popular Wordle game.

I used two dictionary lists from https://github.com/dolph/dictionary (popular.txt and enable1.txt - the first returning the correct words more quickly but the latter being a more extensive list of words).

I developed nodeJS apps to filter these lists down to just the five letter words, calculate the frequency of every letter of the alphabet in these words, scored every word based on the frequency of its letters and finally order them based on this score.

I then turned this into a website that provides the user with the best word to play and provides them with their next best word based on their input that they provide from Wordle.

When I have become more experienced I will turn it into a dynamic website so that the data can be read from a file on the server rather than hard coded into the JS file. 