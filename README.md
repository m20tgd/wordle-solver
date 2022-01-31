# wordle-solver
An app for solving the popular Wordle game.

I used two dictionary lists from https://github.com/dolph/dictionary (popular.txt and enable1.txt - the first returning the correct words more quickly but the latter being a more extensive list of words).

I developed nodeJS apps to filter these lists down to just the five letter words, calculate the frequency of every letter of the alphabet in these words, scored every word based on the frequency of its letters and finally order them based on this score.

I intend to develop a website that tells the user the best words to play based on the results of the previous word that was played.