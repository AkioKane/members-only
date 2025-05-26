async function loginRoomRouterGet(req, res, next) {
  return res.render("login-secret-room", { title: "Secret Room", titleHeader: "Secret Room", user: req.user })
}

module.exports = loginRoomRouterGet;