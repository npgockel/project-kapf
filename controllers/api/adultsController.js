const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

/**
 * User Read - All
 */
router.get("/", isAuthenticated, function (req, res) {
  db.Adult.findAll(req.query)
    .then(dbModel => res.json(dbModel))
    
    .catch(err => res.status(422).json(err));
});

/**
 * User Read - One
 */
router.get("/:id", isAuthenticated, function (req, res) {
  db.Adult.findByPk(req.params.id)
    .then(dbModel =>{
      db.Child.findAll({
        through: "ParentChild"
      }).then(childs => res.json(dbModel).json(childs));
    })
    .catch(err => res.status(422).json(err));
});

/**
 * User - Create
 * Notice how we are using the 'withPassword' scope.
 * This allows for us to modify a user's password, as defined in the User model
 */
router.post("/", function (req, res) {
  db.Adult.scope("withPassword")
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/**
 * User - Update
 */
router.put("/:id", isAuthenticated, function (req, res) {
  db.Adult.update(req.body, { where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

/** 
 * User - Delete
 */
router.delete("/:id", isAuthenticated, function (req, res) {
  db.Adult.destroy({ where: { id: req.params.id } })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
