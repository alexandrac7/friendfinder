var path = require("path");

module.exports = function(app) {

//This is telling me that there is no such file or directory that matches the path and I don't know why.

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname +  "../app/public/home.html"));
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + "../app/public/survey.html"));
});



}