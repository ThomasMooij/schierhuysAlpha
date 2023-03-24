import express from "express"
import { deleteUser, getUser, getUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../functions/jwt.js";

const router = express.Router()

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
router.get("/",verifyToken, getUsers);

export default router