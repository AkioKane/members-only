const { Router } = require("express");
const { loginRoomRouterGet, loginRoomRouterPost } = require("../controllers/loginRoomController");

const loginRoomRouter = Router();

loginRoomRouter.get("/", loginRoomRouterGet);
loginRoomRouter.post("/", loginRoomRouterPost);

module.exports = loginRoomRouter;