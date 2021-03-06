// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on table-data, waitinglist, etc.
// // ===============================================================================
var path = require("path");

var friends = require("../data/friends.js");


// // ===============================================================================
// // ROUTING
// // ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

}
  
  // ---------------------------------------------------------------------------

  // app.get("/api/friends", function(req, res) {

  // This would be a post request that would post the data from each submitted survey in the api friend list.

  // }
