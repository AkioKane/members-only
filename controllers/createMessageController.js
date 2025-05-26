async function createMessageRouterGet(req, res, next) {
  // console.log(req.user);

  return res.render("create-message", { title: "Create Message", titleHeader: "Create Message", user: req.user })
}

module.exports = createMessageRouterGet;