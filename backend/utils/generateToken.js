import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId, res) => {
    //creating a token with the method sign with the userId payload
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 1000, //15 days * 24 hrs * 60 mins * 1000 milliseconds
    httpOnly: true, //prevents CSS(Cross Site Scripting) Attacks
    sameSite: "strict", //CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development"
  });
};


export default generateTokenandSetCookie;
