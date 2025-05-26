const db = require("../db/quaries");
const passport = require("passport");

async function getMessages() {
  const items = await db.getAllMessages();
  return items;
}

async function indexRouterGet(req, res) {
  const data = await getMessages();
  // console.log(req.user);

  return res.render("index", { title: "Home", titleHeader: "Dashboard", database: data, user: req.user });
}

async function signInPassport(req, res, next) {
  const data = await getMessages();
  return passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render("logIn", {title: "Sign In",  titleHeader: "Sign In", database: data, errorMessage: info.message});
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/")
    });
  })(req, res, next);
}

module.exports = {
  indexRouterGet,
  signInPassport
}