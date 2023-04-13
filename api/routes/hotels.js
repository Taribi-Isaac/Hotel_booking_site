import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();



//CREATE NEW HOTEL
router.post("/", verifyAdmin, createHotel);


//UPDATE EXISTING
router.put("/:id",verifyAdmin, updateHotel);

//DELETE REQUEST
router.delete("/:id",verifyAdmin, deleteHotel);

//GET HOTEL REQUEST
router.get("/find//:id", getHotel);

//GET ALL HOTEL REQUEST
router.get("/", getHotels);
router.get("/countByCity", countByCity );
router.get("/countByType", countByType);



export default router