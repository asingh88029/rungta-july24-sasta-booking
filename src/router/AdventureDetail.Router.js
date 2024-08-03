const express = require("express")

const { CreateNewAdventureDetailController } = require("./../controller/AdventureDetail.controller")

const { AdminAuthorizationMiddleware } = require("./../middlewares/Authorization.middleware")

const AdventureDetailRouter = express.Router();

AdventureDetailRouter.post("/add", AdminAuthorizationMiddleware, CreateNewAdventureDetailController)

module.exports = AdventureDetailRouter