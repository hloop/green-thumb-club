const express = require('express');
const router  = express.Router();
// const multer = require('multer');
const Plant   = require('../models/plant');
const Comment = require('../models/comment');
// const ensureLogin  = require('connect-ensure-login');

const uploadCloud = require('../config/cloudinary');

/////////////////////ensureLogin.ensureLoggedIn(),
router.get('/plants', (req, res, next) => {
    Plant.find()
    .then((listOfPlants)=>{
        res.render('plants', {plantsArray: listOfPlants});
    })
    .catch((err)=>{
        next(err); 
     })
});

// // Finish
router.get('/plants/create', (req, res, next) => {
  res.render('addPlant')
});

router.post('/plants/create', uploadCloud.single('photo'), (req, res, next)=>{
   const newPlant = new Plant ({
    species: req.body.species,
    family: req.body.family,
    light: req.body.light,
    climate: req.body.climate,
    maitenance: req.body.maitenance,
    image: req.file.url
   })

   newPlant.save()
   .then((response)=>{
       res.redirect('/plants')
   })
   .catch((err)=>{
       next(err);
   }) 

})

router.get('/plants/:id/edit', (req, res, next)=>{
   Plant.findById(req.params.id)
   .then((thePlant)=>{
       res.render('editPlant', {thePlant})
   })
   .catch((err)=>{
       next(err);
   })
})


router.post('/plants/:id/update', (req, res, next)=>{
    Plant.findByIdAndUpdate(req.params.id, {
      species: req.body.species,
      family: req.body.family,
      light: req.body.light,
      climate: req.body.climate,
      maitenance: req.body.maitenance,
    })
    .then((thePlant)=>{
        res.redirect('/plants/'+thePlant._id)
    })
    .catch((err)=>{
        next(err);
    })  
})

router.post('/plants/:id/delete', (req, res, next)=>{
    Plant.findByIdAndRemove(req.params.id)
    .then((reponse)=>{
        res.redirect('/plants');
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/plants/:id', (req, res, next) => {
    const id = req.params.id;
    Plant.findById(id)
    .then((thePlant)=>{    
        res.render('plantsInfo', {plant: thePlant});
    })
    .catch((err)=>{
       next(err); 
    })
});



module.exports = router;

