const express = require('express');
const controller = require('../controllers/usersController');

const router = express.Router();

const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

router.get('/login', (req, res) => {
  res.render('auth/login', {
    documentTitle: 'Travelx app',
  });
});
router.post('/login', passport.authenticate('local', {
  successRedirect: '/travel',
  failiurRedirect: 'auth/login',
  failureFlash: false,
})
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/travel');
});


router.get('/register', (req, res) => {
  res.render('auth/register', {
    documentTitle: 'Travelx registration',
  });
});
router.post('/register', controller.create);
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);

module.exports = router;