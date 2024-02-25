import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //Get the token from the cookies but before this... Please import Cookie Parser in the server.js file
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    // decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    // if we passed the if check
    const user = await User.findById(decoded.userId).select("-password"); // return the user and remove the password

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next(); //whenever protectRoute will pass it will call the next() and go to the sendMessage function
  } catch (error) {
    console.log("Error in Protect Route: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
