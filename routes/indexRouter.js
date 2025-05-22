const { Router } = require("express");
const { indexRouterGet } = require("../controllers/indexController");
const { registerRouterPost } = require("../controllers/registerController");
const passport = require("passport");

const indexRouter = Router();

indexRouter.get("/", indexRouterGet);
indexRouter.post("/register", registerRouterPost)
indexRouter.post("/log-in", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/"
}))

module.exports = indexRouter;