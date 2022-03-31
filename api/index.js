const app = require('express')();
const { v4 } = require('uuid');
var cors = require('cors');
var steam = require('steam-web');
require('dotenv').config();
const port = 4000;


app.use(cors());

var s = new steam({
  apiKey: process.env.EXPRESS_STEAM_API_KEY,
  format: 'json' //optional ['json', 'xml', 'vdf']
});


s.getRecentlyPlayedGames({
    steamid: '76561198000291767',
    callback: function(err,data) {
        app.get("/recentlyplayed", (req, res) => res.send(data));
        
    }
  });
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
module.exports = app;