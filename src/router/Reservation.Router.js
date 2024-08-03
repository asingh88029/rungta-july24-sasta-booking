const express = require("express")
const {CreateNewReservationController} = require("./../controller/Reservation.controller")
const {CustomerAuthorizationMiddleware} = require("./../middlewares/Authorization.middleware")

const ReservationRouter = express.Router()

ReservationRouter.post("/add", CustomerAuthorizationMiddleware, CreateNewReservationController)

module.exports = ReservationRouter
