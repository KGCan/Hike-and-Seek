const router = require('express').Router();
const { reverseMultiplyAndSum } = require('validator/lib/util/algorithms');
const sequelize = require('../config/connection');
//const { Post, User, Comment } = require('../models');
const { Trail } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Get Trails from search for Cards
router.get('/results', (req, res) => {
    Trail.findAll({
        // attributes: { exclude: ['password'] }
        //map()
        attributes: ['id', 'trail_name'],
        // include: [
        //     {
        //         model: Animal,
        //         attributes: ['animal_name']

        //     }
        // ]

    })
        .then(trailData => {
            const trails = trailData.map(trail => trail.get({ plain: true }));

            res.render('results', {
                trails,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// ---------  pseudocode card & results Direction ----------
// when user searches then redirects to Results Page
//if they then decided to login 
// they should be redirected back to Results Page
// if  havent searched city yet, then login =>  redir to homepage;
// if searched then log in, ==> redir to search Results

// router.get('/cards', (req, res) => {
//     // if (req.session.loggedIn) {
//     //     res.redirect('/');
//     //     return;
//     //}

//     res.render('cards');
// });



module.exports = router;