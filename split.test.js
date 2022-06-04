const split = require('./split.js');

test('test 0', () => {
    var input = "<p>";
    var expected = ["<p>"];
    var actual = split(input);
    expect(actual).toStrictEqual(expected);
});

test('test 1', () => {
    var input = "<p>Hello World</p>";
    var expected = ["<p>", "Hello", " ", "World", "</p>"];
    var actual = split(input);
    expect(actual).toStrictEqual(expected);
});

test('test 2', () => {
    var input = "<p>Hello, <i>World</i></p>";
    var expected = ["<p>", "Hello", ", ", "<i>", "World", "</i>", "</p>"];
    var actual = split(input);
    expect(actual).toStrictEqual(expected);
});

test('test 3', () => {
    var input = "Alice's Adventures";
    var expected = ["Alice's", " ", "Adventures"];
    var actual = split(input);
    expect(actual).toStrictEqual(expected);
});
