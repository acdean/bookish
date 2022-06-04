// var log4js = require("log4js");
// var logger = log4js.getLogger();
// logger.level = "debug";

var TAG_RE = "<[^>]*>";
var WORD_RE = "[A-Za-z0-9']{1,}";
var PUNC_RE = "[ \.,!‘’“”—-]{1,}";

function split(text) {
    var out = [];
    var i = 0;
    // regexp should match:
    // <tags> and </tags>
    // Hello World and Alice's (straight apostrophe)
    // groups of punctuation, including smart quotes
    // TODO &name; so i can leave mdashes etc in the samples
    re = new RegExp(TAG_RE + "|" + WORD_RE + "|" + PUNC_RE, "g");
    while (result = re.exec(text)) {
        out.push(result[0])
    }
    //alert("OUT [" + out + "]")
    //logger.debug("Out [" + out + "]");

    return out
}

//module.exports = split;
