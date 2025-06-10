const { deleteMessage } = require("../db/quaries");

async function deleteMessageRouterGet(req, res, next) {
  if (req.user?.admin === true) {
    deleteMessage(req.query.message)
  }
  
  return res.redirect("/");
}

module.exports = deleteMessageRouterGet;