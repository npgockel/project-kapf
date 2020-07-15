const router = require("express").Router();
// Import our controllers
const postRoutes = require("./postsController");
const adultRoutes = require("./adultsController");
const childRoutes = require("./childController");
const foodRoutes = require("./foodController");

const sleepRoutes = require("./sleepController");
const likeRoutes = require("./likeController");
const dislikeRoutes = require("./dislikeController");
const allergyRoutes = require("./allergyController");
const noteRoutes = require("./noteController");

// Hook up to the router
router.use("/posts", postRoutes);
router.use("/adults", adultRoutes);
router.use("/child", childRoutes);
router.use("/food", foodRoutes);

router.use("/sleep", sleepRoutes);
router.use("/like", likeRoutes);
router.use("/dislike", dislikeRoutes);
router.use("/allergy", allergyRoutes);
router.use("/note", noteRoutes);


// Export the router
module.exports = router;
