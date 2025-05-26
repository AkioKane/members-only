const { Router } = require("express");
const createMessageRouterGet = require("../controllers/createMessageController");

const createMessageRouter = Router();

createMessageRouter.get("/", createMessageRouterGet);

module.exports = createMessageRouter;