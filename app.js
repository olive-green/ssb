const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const hostname = "127.0.0.1";
const port = process.env.PORT || "3000";

//List of letiables

const app = express();

app.use(express.static("public"));
// app.use("/views", express.static(__dirname + "/views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
/* Home Page */
app.get("/", (req, res) => {
    let pageTitle = "SSB|HOME";
    let cssName = "css/styles.css";
    res.render("landing", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
});


/* Port */
app.listen(port, () => {
    console.log(`Server running at  http://${hostname}:${port}/`);
});