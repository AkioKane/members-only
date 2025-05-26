async function createMessageRouterGet(req, res, next) {
  return res.render("create-message", { title: "Create Message", user: req.user })
}

module.exports = createMessageRouterGet;