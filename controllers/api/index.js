const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const adultRoutes = require("./adultsController");
const childRoutes = require("./childController");
const foodRoutes = require("./foodController");
const infoRoutes = require("./infoController");
const sleepRoutes = require("./sleepController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/adults", adultRoutes);
router.use("/child", childRoutes);
router.use("/food", foodRoutes);
router.use("/info", infoRoutes);
router.use("/sleep", sleepRoutes);


// Export the router
module.exports = router;
