// Phrases is an array of arrays. Each array inside the array should have 3 strings.
// The first string should be the correct option and the other two strings will be treated as incorrect.
export const phrases = [
    [
        "The quick brown fox jumps over the lazy dog",
        "The slow round hen flew over the lazy seal",
        "The fast brown fox jumps over the tired wolf",
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
    const phrase = phrases[id];
    return phrase.slice(0).sort(() => Math.random() - 0.5);
}

export default randomPhrase;
