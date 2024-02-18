const express= require("express");

const { queryGPT } = require("../controllers/chatController");

const chatRoutes = express.Router();

chatRoutes.post("/", queryGPT);

module.exports = chatRoutes;