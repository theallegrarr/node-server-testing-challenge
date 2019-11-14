const router = require('express').Router();
const People = require('./people-model.js');

// for endpoints beginning with /api/auth
router.get('/', (req, res) => {
  People.find()
    .then(people => {
      res.json(people);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  People.add(req.body)
    .then(people => {
      res.json(people);
    })
    .catch(err => res.send(err));
});

module.exports = router;