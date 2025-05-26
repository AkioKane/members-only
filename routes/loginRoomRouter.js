const { Router } = require("express");
const loginRoomRouterGet = require("../controllers/loginRoomController");

const loginRoomRouter = Router();

loginRoomRouter.get("/", loginRoomRouterGet);

module.exports = loginRoomRouter;