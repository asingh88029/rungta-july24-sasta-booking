const express = require("express");
const { CreateNewAdventureController, GetAllAdventuresInACityController} = require("./../controller/Adventure.controller")
const {AdminAuthorizationMiddleware} = require("./../middlewares/Authorization.middleware")

const AdventureRouter = express.Router();

AdventureRouter.post("/add", AdminAuthorizationMiddleware, CreateNewAdventureController)
                                         
AdventureRouter.get("/all", GetAllAdventuresInACityController)

module.exports = AdventureRouter;