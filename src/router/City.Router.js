const express = require("express");
const { CreateNewCityConytoller, GetAllCityController } = require("./../controller/City.controller")

const CityRouter = express.Router();

CityRouter.post("/add", CreateNewCityConytoller)

CityRouter.get("/all", GetAllCityController)
                                         
module.exports = CityRouter;