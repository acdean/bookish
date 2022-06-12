// var log4js = require("log4js");
// var logger = log4js.getLogger();
// logger.level = "debug";

// recalculates global redactedArray based on original text and guesses
// also recalculates hits for the highlighted word
function redactText() {
    redactedArray.length = 0    // truncate array
    hits = 0;
    //debug("Guessed [" + guessedWords + "]");
    //debug("Reserved [" + reservedWords + "]");
    textArr.forEach(element => {
        redactedArray.push(redactWord(element));
    });
    //debug("RedactedArray [" + redactedArray.join('') + "]");
    //debug("Hits: " + hits)
}

// highlight is current guess
function redactWord(word) {
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
            // name the highlights (0 - indexed)
            return "<b id='hi" + (hits - 1) + "'>" + word + "</b>";
        } else {
            return word;
        }
    }
    if (reveal) {
        return word;
    }
    // return '████████████████████'.substr(0, word.length);        // 25% too large
    return '12345678901234567890'.substr(0, word.length).fixed();   // can highlight
}

function debug(str) {
    //logger.debug(str);
    alert(str);
}

//module.exports = redact;
