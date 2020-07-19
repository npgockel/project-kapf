// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const router = require("express").Router();

router.post("/login", passport.authenticate("local"), function (req, res) {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

// Route for signing up a adult. The adult's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize Adult Model. If the adult is created successfully, proceed to log the adult in,
// otherwise send back an error
router.post("/signup", function (req, res) {
  console.log(req.body);
  db.Adult.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
    .then(function () {
      res.redirect(307, "/auth/login");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// Route for logging adult out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our adult to be used client side
router.get("/adult_data", function (req, res) {
  if (!req.user) {
    // The adult is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the adult's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName
    });
  }
});

module.exports = router;
