const express = require("express");
const { CreateNewCityConytoller, GetAllCityController , UpdateACityController} = require("./../controller/City.controller")

const CityRouter = express.Router();

CityRouter.post("/add", CreateNewCityConytoller)

CityRouter.get("/all", GetAllCityController)

CityRouter.put("/update", UpdateACityController)
                                         
module.exports = CityRouter;