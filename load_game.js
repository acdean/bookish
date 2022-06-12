// inserts an include for the correct game, based on input
// index.html => current utc date
// index.html?param => games/param.js
// some logic prevents entering future dates
function load_game() {
    // load the relevant game
    game = document.location.search.substring(1);
    // get dateStr for current date
    var date = new Date();
    var yyyy = "" + date.getUTCFullYear();
    var mm = date.getUTCMonth() + 1;
    if (mm < 10) {
        mm = "0" + mm;
    };
    var dd = date.getUTCDate();
    if (dd < 10) {
        dd = "0" + dd
    }
    var dateStr = "" + yyyy + mm + dd;
    //debug("Game: " + game + " Date: " + dateStr)
    // if game not given or it's the future then use today
    if (game == "") {
        game = dateStr;
    }
    debug("Game " + game);
    document.write('<script language="javascript" src="games/' + game + '.js"><\/script>');
    return game;
}
