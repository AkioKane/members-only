const db = require("../db/quaries");

async function getMessages() {
  const items = await db.getAllMessages();
  return items;
}

async function logInRouterGet(req, res) {
  const data = await getMessages();

  return res.render("logIn", {title: "Sign In", titleHeader: "Sign In", database: data, user: req.user, errorMessage: null});
}

module.exports = {
  logInRouterGet
}