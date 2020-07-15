const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * User Read - All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.Sleep.findAll()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User Read - One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.Sleep.findByPk(req.params.id)
    .then(dbModel => {
      db.Child.findByPk(req.user.id).then(
        child => {
          dbModel.addChild(child).then(sleep => res.json(sleep));
        })})
    .catch(err => res.status(422).json(err));
});

/**
 * User - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a user's password, as defined in the User model
 */
router.post("/", function (req, res) {
  db.Sleep
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.Sleep.update(req.body, { where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * User - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.Sleep.destroy({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
