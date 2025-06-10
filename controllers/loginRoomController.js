const { validSecretKey, updateSecretKeyUser } = require("../db/quaries");

async function loginRoomRouterGet(req, res, next) {
  return res.render("login-secret-room", { title: "Secret Room", titleHeader: "Secret Room", user: req.user, error: false, })
}

async function loginRoomRouterPost(req, res, next) {
  try {
    const { password } = req.body;
    // console.log(req.user);
    if (await validSecretKey(password) === true) {
      updateSecretKeyUser(req.user.id);
      res.redirect("/create-message");
    } else {
      return res.render("login-secret-room", { title: "Secret Room", titleHeader: "Secret Room", user: req.user, error: true })
    }
  } catch (e) {
    next(e);
  }
}

module.exports = { loginRoomRouterGet, loginRoomRouterPost };