const redact = require('./redact.js');

test('test 0', () => {
    var input = ["this", "redacted", "<p>", "guessed", "reserved"];
    var guessedWords = ['guessed']
    var reservedWords = ['this', 'reserved', '<p>']

    var expected = ["this", "XXXX", "<p>", "guessed", "reserved"];
    var actual = redact(input, guessedWords, reservedWords);
    expect(actual).toStrictEqual(expected);
});
