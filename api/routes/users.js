import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser, verifyToken } from "../utils/verifyToken.js";


const router = express.Router();



// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//   res.send("Hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//   res.send("Hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//   res.send("Hello admin, you are logged in and you can delete all account")
// })



//UPDATE EXISTING
router.put("/:id", verifyUser, updateUser);

//DELETE REQUEST
router.delete("/:id", verifyUser, deleteUser);

//GET User REQUEST
router.get("/:id", verifyUser, getUser);

//GET ALL User REQUEST
router.get("/", verifyAdmin, getUsers);




export default router