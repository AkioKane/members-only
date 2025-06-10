const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");

const indexRouter = require("./routes/indexRouter");
const registerRouter = require("./routes/registerRouter");
const logInRouter = require("./routes/logInRouter");
const initialize = require("./utils/passport-config");
const logOutRouter = require("./routes/logOutRouter");
const createMessageRouter = require("./routes/createMessageRouter");
const loginRoomRouter = require("./routes/loginRoomRouter");
const deleteMessageRouter = require("./routes/deleteMessageRouter");

const app = express();

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
initialize(passport);

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
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/sign-up", registerRouter);
app.use("/sign-in", logInRouter);
app.use("/log-out", logOutRouter);
app.use("/create-message", createMessageRouter);
app.use("/login-secret-room", loginRoomRouter);
app.use("/delete", deleteMessageRouter)

app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "Page not found!", 
    titleHeader: "Not Found",
    text: "Try returning to the home page..."
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("app listen in", PORT);
});