const db = require("../db/quaries");

async function getMessages() {
  const items = await db.getAllMessages();
  return items;
}

async function indexRouterGet(req, res) {
  const data = await getMessages();
  console.log(req.user);

  return res.render("index", { title: "Home", database: data, user: req.user });
}

module.exports = {
  indexRouterGet
}