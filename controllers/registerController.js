const bcrypt = require("bcrypt");
const { createUser, validUsername, validEmail } = require("../db/quaries");

async function registerRouterGet(req, res) {
  return res.render("register", {title: "Sign Up", user: req.user, error: null});
}

async function registerRouterPost(req, res, next) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const matchUsername = await validUsername(username);
    if (!matchUsername) {
      return res.render("register", { title: "SIgn Up", error: "Username already taken!" })
    }
    const matchEmail = await validEmail(email);
    if(!matchEmail) {
      return res.render("register", { title: "Sign Up", error: "Email already taken!" })
    }

    await createUser(username, email, hashedPassword);
    res.redirect("/");
  } catch (e) {
    console.error(e);
    next(e);
  }
}

module.exports = {
  registerRouterGet,
  registerRouterPost
}