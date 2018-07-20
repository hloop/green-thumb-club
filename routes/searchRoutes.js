const express = require('express');
const searchRouter  = express.Router();
// const bcrypt       = require('bcryptjs');
// const passport     = require('passport');
const Plant   = require('../models/plant');

// ensureLogin.ensureLoggedIn('/'),
searchRouter.get('/search/plants', (req, res, next)=>{
  const search = req.query.searchInput;
  Plant.find({
      "species": {"$regex": search, "$options": "i"}
  })
  .then((plants)=>{
      // res.render(`/plants/${req.params.id}`)
      console.log(plants);
      res.render('plantsInfo', {listOfPlants: plants})
  })

    .catch((daError)=>{
      next(daError)
 })
});

module.exports = searchRouter;