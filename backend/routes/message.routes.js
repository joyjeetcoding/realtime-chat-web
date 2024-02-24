import express from "express"
import { sendMEssage } from "../controllers/message.conroller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMEssage);


export default router;