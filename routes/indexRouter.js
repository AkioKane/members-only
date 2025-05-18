const { Router } = require("express");
const { indexRouterGet } = require("../controllers/indexController");
const { registerRouterPost } = require("../controllers/registerController");

const indexRouter = Router();

indexRouter.get("/", indexRouterGet);
indexRouter.post("/register", registerRouterPost)

module.exports = indexRouter;