//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express = require('express');
const filmRouter = new express.Router();


//INDEX
filmRouter.get('/', function(req, res){
    res.json({data: films});
});

// SHOW
filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]});
})

// UPDATE
filmRouter.put('/:id', function(req, res){
  // films[req.params.id] = req.body.film;
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors,
    reviews: req.body.reviews
  });
  films[req.params.id] = film;
  res.json({data: films});
})

// CREATE
filmRouter.post('/', function(req, res) {
  const film = new Film({
    title: req.body.title,
    actors: req.body.actors,
    reviews: req.body.reviews
  });
  films.push(film);
  res.json({data: films});
});

// DELETE
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
})






// catRouter.delete('/:id', function(req, res) {
//   cats.splice(req.params.id, 1);
//   res.json({ data: cats });
// });
module.exports = filmRouter;
