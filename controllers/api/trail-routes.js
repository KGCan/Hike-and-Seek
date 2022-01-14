const router = require('express').Router();
const { User, Animal, Trail, TrailAnimal} = require("../../models");


// GET /api/users
router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Trail.findAll({
    // attributes: { exclude: ['password'] }
    //map()
    attributes: ['trail_name','city_name', 'lat', 'lon'],
    include: [
      {
        model: Animal,
        attributes: ['animal_name']
      }
    ]

  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;