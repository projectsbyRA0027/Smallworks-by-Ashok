import express from "express";

const router = express.Router()

router.route("/api/restaurants.route.js").get((req,res)=> res.send("hello world"))

export default router