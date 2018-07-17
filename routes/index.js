const express = require('express');
const router  = express.Router();
const User = ('../models/user.js');

/* GET home page */
router.get('/', (req, res, next) => {

  res.render('index');
});

// router.use((req, res, next) => {
//   if(req.session.currentUser) {
//     next();
//   } else {
//     res.redirect("/login")
//   }
// });

module.exports = router;
