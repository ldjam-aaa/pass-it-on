const phrases = [
    "test phrase",
];

function randomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

export default randomPhrase;
