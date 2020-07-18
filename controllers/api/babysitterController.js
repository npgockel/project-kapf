const db = require("../../models");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.get("/", isAuthenticated, function (req, res) {
    db.BabysitterRelation.findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
  
  /**
   * User Read - One
   */
  router.get("/:id", isAuthenticated, function (req, res) {
    db.BabysitterRelation.findByPk(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

router.post("/", function (req, res) {
    db.BabysitterRelation.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

router.put("/:id", isAuthenticated, function (req, res) {
    db.BabysitterRelation.update(req.body, { where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
  
  /** 
   * User - Delete
   */
  router.delete("/:id", isAuthenticated, function (req, res) {
    db.BabysitterRelation.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });


module.exports = router;