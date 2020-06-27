const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const userRoutes = require("./usersController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

// Export the router
module.exports = router;
