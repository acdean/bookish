// var log4js = require("log4js");
// var logger = log4js.getLogger();
// logger.level = "debug";

// recalculates global redactedArray based on original text and guesses
// also recalculates hits for the highlighted word
var seed = 1;
function redactText() {
    seed = 1;
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
    // debug("Word [" + lower + "]")
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
    var len = word.length;
    if (blocks == "solid") {
        // uncountable image
        return "<img src='black.jpg' style='width:" + (len * .7) + "em;'/>";
    }
    if (blocks == "inaccurate") {
        // random factor
        len += random();
    }
    return '12345678901234567890'.substr(0, len).fixed();
}

// -1, 0, +1
function random() {
    var x = Math.sin(seed++) * 10000;
    rnd = x - Math.floor(x);
    rnd = Math.floor(rnd * 3) - 1;
    // alert("Rnd: " + rnd);
    return rnd;
}

function debug(str) {
    //logger.debug(str);
    alert(str);
}

//module.exports = redact;
