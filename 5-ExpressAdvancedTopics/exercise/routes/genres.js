const express = require('express');
const router = express.Router();

const genres = [
    { id: 1, name: 'Action' },  
    { id: 2, name: 'Horror' },  
    { id: 3, name: 'Romance' },   
];
  
router.get('/', (req, res) => {
    res.send(genres);
});
  
router.post('/', (req, res) => {
    const genre = {
      id: genres.length + 1,
      name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});
  
router.put('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    
    genre.name = req.body.name; 
    res.send(genre);
});
  
router.delete('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
  
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
  
    res.send(genre);
});
  
router.get('/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given ID was not found.');
    res.send(genre);
});
  
module.exports = router;