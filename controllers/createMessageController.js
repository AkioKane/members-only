const { createMessage } = require("../db/quaries");

async function createMessageRouterGet(req, res, next) {
  return res.render("create-message", { title: "Create Message", titleHeader: "Create Message", user: req.user })
}

async function createMessageRouterPost(req, res, next) {
  const { message } = req.body;
  const user_id = req.user.id;

  createMessage(user_id, message);

  return res.redirect("/");
}

module.exports = { 
  createMessageRouterGet,
  createMessageRouterPost
};