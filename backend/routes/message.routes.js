import express from "express"
import { getMessages, sendMEssage } from "../controllers/message.conroller.js";
import protectRoute from "../middleware/protectRoute.js";

// Please refer to the Converssation Model images given in  the assets folder for better understanding then come back 

const router = express.Router();

// whenever there is a post request ... it will first check the middleware... here the middleware is protectRoute and whenever protectRoute will pass it will call the next() and go to the sendMessage function
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMEssage);


export default router;