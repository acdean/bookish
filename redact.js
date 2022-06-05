// var log4js = require("log4js");
// var logger = log4js.getLogger();
// logger.level = "debug";

// go through source a word at a time, redact all those that aren't in the words list
// also convert back into a string
var hits = 0;
function redact(inArr) {
    var outStr = [];
    hits = 0;
    //debug("Guessed [" + guessedWords + "]");
    //debug("Reserved [" + reservedWords + "]");
    inArr.forEach(element => {
        outStr.push(redactWord(element));
    });
    //debug("OutStr [" + outStr.join('') + "]");
    //debug("Hits: " + hits)
    return outStr.join('');
}

// highlight is current guess
function redactWord(word) {
    if (solved) {
        return word;
    }
    if (word.match("^" + PUNC_RE + "$")) {
        // punctuation is never redacted
        return word;
    }
    var lower = word.toLowerCase();
    //debug("Word [" + lower + "]")
    if (reservedWords.includes(lower)) {
        //debug("Reserved [" + lower + "]")
        return word;
    }
    if (guessedWords.includes(lower)) {
        //debug("Guessed [" + lower + "][" + highlight + "]")
        if (lower == highlight) {
            hits++;
            return word.bold();
        } else {
            return word;
        }
    }
    return '████████████████████'.substr(0, word.length);
}

function debug(str) {
    //logger.debug(str);
    alert(str);
}

//module.exports = redact;