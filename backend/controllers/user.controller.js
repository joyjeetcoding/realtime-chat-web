import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")
    // ne means not equal.... this statement means we want all the Users who are not loggedin
    // It also means that we will not show ourseles in the chat sidebar... if you want to show.... then only write User.find()

    return res.status(200).json(filteredUsers)

  } catch (error) {
    console.error("Error in getUserForSidebar: ", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
