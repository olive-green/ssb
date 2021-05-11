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

// officer entries Mens page
app.get("/men",(req,res)=>{
    let pageTitle = "SSB|MEN";
    let cssName = "css/Men.css";
    res.render("Men", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})
// officer entries Womens page
app.get("/women",(req,res)=>{
    let pageTitle = "SSB|MEN";
    let cssName = "css/Men.css";
    res.render("Women", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})
/* Written Examination */
app.get("/written/acc",(req,res)=>{
    let pageTitle = "SSB|WRITTEN";
    let cssName = "./../css/written/exam.css";
    res.render("Written-Examination/ACC", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})

app.get("/written/nda",(req,res)=>{
    let pageTitle = "SSB|WRITTEN";
    let cssName = "./../css/written/exam.css";
    res.render("Written-Examination/NDA", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})

app.get("/written/afcat",(req,res)=>{
    let pageTitle = "SSB|WRITTEN";
    let cssName = "./../css/written/exam.css";
    res.render("Written-Examination/AFCAT", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})

app.get("/written/cds",(req,res)=>{
    let pageTitle = "SSB|WRITTEN";
    let cssName = "./../css/written/exam.css";
    res.render("Written-Examination/CDS", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})


/* SSB interview */
app.get("/ssbinterview", (req, res) => {
    let pageTitle = "SSB|Interview";
    let cssName = "./css/interview.css";
    res.render("ssb-interview", {
        pageTitle: pageTitle,
        cssFile: cssName,
    });
})

/* Team Section */
app.get("/team", (req, res) => {
    let pageTitle = "SSB|TEAM";
    let cssName = "./css/about.css";
    res.render("about", {
        pageTitle: pageTitle,
        cssFile: cssName,
    })
})

// interview tips page
app.get("/interviewTips",(req,res)=>{
    let pageTitle="SSB|Tips";
    let cssName="./css/interviewTips.css";
    res.render("interviewTips",{
        pageTitle:pageTitle,
        cssFile:cssName
    })
})
/* Port */
app.listen(port, () => {
    console.log(`Server running at  http://${hostname}:${port}/`);
});