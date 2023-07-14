const express = require("express");

const playlistRoute = require("./routes/playlist.route");

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.use("/playlist", playlistRoute);

const listener = app.listen(3000, function () {
  console.log("Listening on port " + listener.address().port);
});
