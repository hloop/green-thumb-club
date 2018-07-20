const express = require('express');
const commentRouter  = express.Router();
const Plant   = require('../models/plant');

commentRouter.get('/plants/:id/comments/new', (req, res, next)=>{
  Plant.findById(req.params.id)
  .then((thePlant)=>{
      res.render('addComment', {plant: thePlant})
  })
  .catch((err)=>{
      next(err)
   })
});


commentRouter.post('/plants/:id/comments/create', (req, res, next)=>{
                          //first argument is ID of thing you want to find
   //                        |           second argument is the update you want to run
   //                        |                            |
  Plant.findByIdAndUpdate(req.params.id,       {$push: {comments: req.body}})
  .then((response)=>{

      res.redirect(`/plants/${req.params.id}`)
  })
  .catch((err)=>{
      next(err);
  })
});


commentRouter.post('/plants/:id/comments/delete/:commentIndex', (req, res, next)=>{
  const plantID = req.params.id;
  const commentIndex = req.params.commentIndex;
  Plant.findById(plantID)
  .then((thePlantThatImEditing)=>{
      thePlantThatImEditing.comments.splice(commentIndex, 1);
      thePlantThatImEditing.save()
          .then((x)=>{
              res.redirect('/plants/' + plantID)
          })
          .catch((err)=>{
              next(err)
          })
      })
  .catch((err)=>{
      next(err);
  })

})



module.exports = commentRouter;