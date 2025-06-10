const { Router } = require("express");
const deleteMessageRouterGet = require("../controllers/deleteMessageController");

const deleteMessageRouter = Router();

deleteMessageRouter.get("/", deleteMessageRouterGet);

module.exports = deleteMessageRouter;