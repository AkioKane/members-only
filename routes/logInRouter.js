const { Router } = require("express");
const { logInRouterGet } = require("../controllers/logInController");

const logInRouter = Router();

logInRouter.get("/", logInRouterGet);

module.exports = logInRouter;