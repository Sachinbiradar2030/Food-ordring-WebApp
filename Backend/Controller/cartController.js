import userModel from "../Models/userModel.js";

// add items to user cart
const addTocart = async (req, res) => {
  try {
    // Find the user by their userId
    const userData = await userModel.findById(req.body.userId);

    // Check if the user exists
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartDate = userData.cartDate||{}; //  "|| {}"Default to empty object if undefined
    // console.log("Cart Data:", cartDate);

    // Check if the item already exists in the cart
    if (!cartDate[req.body.itemId]) {
      cartDate[req.body.itemId] = 1; 
    } else {
      cartDate[req.body.itemId] += 1;
    }

    // Update the cartDate in the database
    const updatedUser = await userModel.findByIdAndUpdate(
      req.body.userId,
      { cartDate },
      { new: true } 
    );

    // Respond with success message
    return res.json({ success: true, message: "Added to Cart" });
  } catch (error) {
    console.log("Error:", error);
    return res.json({ success: false, message: "Error adding to cart" });
  }
};

//remove items from user cart

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);

    let cartDate = userData.cartDate;
// console.log("remove cart",cartDate);

    if (cartDate[req.body.itemId] > 0) {
      cartDate[req.body.itemId] -= 1;
    }

    if (cartDate[req.body.itemId] === 0) {
      delete cartDate[req.body.itemId];
    }

    await userModel.findByIdAndUpdate(
      req.body.userId,
      { cartDate },
      { new: true } // Ensure the updated user document is returned
    );

    return res.json({ success: true, message: "Removed from Cart" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error removing from cart" });
  }
};

//fetch user cart data

const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    // console.log(userData,"hello this me");

    if (!userData) {
      res.status(404).json({ success: false, message: "User not found" });
    }

    // Get cartDate safely
    const cartDate = userData.cartDate;
    // console.log(cartDate, "get");
    
    res.json({ success: true, cartDate });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return res
      .status(500)
      .json({ success: false, message: "Error fetching cart data" });
  }
};

export { addTocart, removeFromCart, getCart };
