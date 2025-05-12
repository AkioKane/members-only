const db = require("../db/quaries");

async function getMessages() {
  const items = await db.getAllMessages();
  return items;
}

async function indexRouterGet(req, res) {
  const data = await getMessages();
  console.log(data);

  return res.render("index", {title: "Home", database: data});
}

module.exports = {
  indexRouterGet
}