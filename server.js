const express = require("express");
const path = require("path");
const urllib = require("urllib")
const app = express()



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get("/teams/:teamName", function (req, res) {
    teamName = req.params.teamName
    let teamId = teamToIDs[teamName]
    urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, response) {
    
    })
})

app.listen(5000, function () {
    console.log("5000 is listening")
})

