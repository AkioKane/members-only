const { Router } = require("express");
const { indexRouterGet, signInPassport } = require("../controllers/indexController");
const { registerRouterPost } = require("../controllers/registerController");

const indexRouter = Router();

indexRouter.get("/", indexRouterGet);
indexRouter.post("/sign-up", registerRouterPost)
indexRouter.post("/sign-in", signInPassport)

module.exports = indexRouter;