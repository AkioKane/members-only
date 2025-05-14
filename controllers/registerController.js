async function registerRouterGet(req, res) {
  return res.render("register", {title: "Register Account"});
}

module.exports = {
  registerRouterGet
}