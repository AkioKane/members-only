const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));

const assetsPathPublic = path.join(__dirname, "public");
const assetsPathAssets = path.join(__dirname, "assets");
const assetsPathFonts = path.join(__dirname, "fonts");
const assetsPathDOM = path.join(__dirname, "DOM");

app.use("/public", express.static(assetsPathPublic));
app.use("/assets", express.static(assetsPathAssets));
app.use("/fonts", express.static(assetsPathFonts));
app.use("/DOM", express.static(assetsPathDOM));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use("/", indexRouter)

app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "Page not found!", 
    text: "Try returning to the home page..."
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("app listen in", PORT);
})