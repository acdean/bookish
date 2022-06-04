// var log4js = require("log4js");
// var logger = log4js.getLogger();
// logger.level = "debug";

// go through source a word at a time, redact all those that aren't in the words list
// also convert back into a string
function redact(inArr) {
    var outStr = [];
    //debug("Guessed [" + guessedWords + "]");
    //debug("Reserved [" + reservedWords + "]");
    inArr.forEach(element => {
        outStr.push(redactWord(element));
    });
    //debug("OutStr [" + outStr.join('') + "]");
    return outStr.join('');
}

function redactWord(word) {
    if (word.match(/^[ \.,!‘’“”—]{1,}$/)) {
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
        //debug("Guessed [" + lower + "]")
        return word;
    }
    return '████████████████████'.substr(0, word.length);
}

function debug(str) {
    //logger.debug(str);
    alert(str);
}

//module.exports = redact;