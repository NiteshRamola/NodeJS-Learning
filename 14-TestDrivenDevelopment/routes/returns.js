const express = require("express");
const auth = require("../middleware/auth");
const { Movie } = require("../models/movie");
const { Rental } = require("../models/rental");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  if (!req.body.customerId) return res.status(400).send("customerID");
  if (!req.body.movieId) return res.status(400).send("movieId");

  const rental = await Rental.lookup(req.body.customerId, req.body.movieId);

  if (!rental) return res.status(404).send("not found");

  if (rental.dateReturned) return res.status(400).send("already returned");

  rental.return();
  await rental.save();

  await Movie.update(
    { _id: rental.movie._id },
    {
      $inc: { numberInStock: 1 },
    }
  );

  res.send(rental);
});

module.exports = router;
