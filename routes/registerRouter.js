const { Router } = require("express");
const { registerRouterGet } = require("../controllers/registerController");

const registerRouter = Router();

registerRouter.get("/", registerRouterGet);

module.exports = registerRouter;