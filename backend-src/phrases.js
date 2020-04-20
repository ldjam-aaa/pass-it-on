// Phrases is an array of arrays. Each array inside the array should have 3 strings.
// The first string should be the correct option and the other two strings will be treated as incorrect.
export const phrases = [
    [
      "The quick brown fox jumps over the lazy dog",
      "The slow round hen flew over the lazy seal",
      "The fast brown fox jumps over the tired wolf",
      "The fast baby faun leaps over the napping fox",
      "The quick brown fox jumps over the lazy cat"
    ],
    [
      "The best chips are chocolate ones",
      "The best cakes are chocolate cakes",
      "The biggest chips are potato chips",
      "My favorite chips are chocolate ones",
      "Ryan likes chocolate chips"
    ],
    [
      "Sally sells sashimi and sushi by the seashore",
      "Sally sells seashells by the seashore",
      "Sally sells japanese food by the seashore",
      "Sally sells seaweed by the seashore",
      "Susie sells sushi by the seashore."
    ],
    [
      "The rain in Spain stays mainly in the plain!",
      "The rain in Spain falls, but in vain",
      "The storms in spain are never in the plain!",
      "In spain, the plains are always flooded",
      "The rivers in Spain meander through the plains"
    ],
    [
      "Arnold Schwarzenegger has a miniature horse named Whiskey and a donkey named LuLu",
      "Arnold Schwarzenegger has a miniature horse named Gin and a donkey named Bourbon",
      "Arnold Schwarzenegger has a two miniature horses",
      "Arnold Schwarzenegger has a miniature horse named Lulu and a donkey named Lily",
      "Arnold Schwarzenegger gave Angelina his miniature horse"
    ],
    [
      "Gary never sleeps, so he never lies in bed counting sheep",
      "Gary never sleeps; he's too busy watching his sheep",
      "Gary always sleeps, he stays in bed even when his alarm clock beeps",
      "Gary never sleeps; it gives me the creeps!",
      "Gary despises sleep, so he never lies in bed counting sheep"
    ],
    [
      "Alan woke up, stretched, drank some tea, and hacked the NSA",
      "Alan woke up, stretched, drank some kool-aid, and hacked the CIA",
      "Alan took a nap, went for a run, drank some tea, and hacked the NSA",
      "Alan woke up then spent the morning drinking tea and hacking the NSA",
      "Alan woke up, stretched, drank some tea, and hacked Facebook"
    ],
    [
      "On Thursdays, Connie orders a vanilla milkshake at McDonalds",
      "On Mondays, Connie orders a vanilla icecream at McDonalds",
      "On Thursdays, Connie eats a vanilla milkshake with extra whipped cream",
      "On weekdays, Connie orders a vanilla frappe at Starbucks",
      "On weekends, Connie treats herself to a vanilla milkshake at McDonalds"
    ],
    [
      "Weasels are wiser than whales because weasels are wacky",
      "Weasels are wiser than whales because weasels are wiley",
      "Weasels are the wisest because they are the wackiest",
      "Weasels worry whales because weasels are wiser",
      "Weasels are wackier than whales so they are wilder"
    ],
    [
      "The only thing I like better than reading a book is watching the movie and never reading the book",
      "I like reading books more than watching movies",
      "I don't read books but sometimes I watch movies",
      "Whenever I watch a movie, I read the book first",
      "I'm always either reading a book or watching a movie, but I prefer reading books"
    ]
];

/**
 * Returns a correct phrase and the phrase id for that phrase.
 * @return {{phrase: (string), id: number}}
 */
function randomPhrase() {
    const id = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[id][0];
    return {
        id,
        phrase,
    }
}

/**
 * Returns the phrases for a given phrase id in a random order.
 * @param {Number} id
 */
export function randomOrderPhrases(id) {
    const ptc = phrases[id].slice(1);
    const tr = [phrases[id][0], ptc.splice(Math.floor(Math.random() * ptc.length), 1)[0], ptc.slice(Math.floor(Math.random() * ptc.length), 1)[0]];
    return tr.sort(() => Math.random() - 0.5);
}

export default randomPhrase;
