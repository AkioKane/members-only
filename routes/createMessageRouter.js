const { Router } = require("express");
const { createMessageRouterGet, createMessageRouterPost } = require("../controllers/createMessageController");

const createMessageRouter = Router();

createMessageRouter.get("/", createMessageRouterGet);
createMessageRouter.post("/", createMessageRouterPost)

module.exports = createMessageRouter;