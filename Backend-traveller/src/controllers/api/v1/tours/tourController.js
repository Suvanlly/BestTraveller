const moment = require('moment');
const Availability = require('../../../../models/tour/availability');
const Tour = require('../../../../models/tour/tour');
const Booking = require('../../../../models/booking');
const Review = require('../../../../models/review');

// POST one tour
exports.createTour = async (req, res) => {
  const { city, state, title, subtitle, introduction, highlights,
    included, itinerary, price, image, startDate, endDate, map } = req.body;

  const tour = new Tour({
    title, subtitle, city, state, map,
    introduction, highlights, included, itinerary, price, image, startDate, endDate
  });

  if (moment(startDate, "DD/MM/YYYY").isAfter(moment(endDate, "DD/MM/YYYY"))) {
    return res.status(400).send('End date should not be prior to the Start date');
  }
  try {
    await tour.save();
    return res.status(201).json(tour);
  } catch (e) {
    return res.status(400).send(e);
  }
};

// GET one tour
exports.getTour = async (req, res) => {
  const tour = await Tour.findOne({slug: req.params.slug })
  .populate('availability').populate('bookings')
  .populate('reviews').exec();
  if (!tour) {
    return res.sendStatus(404);
  }
  return res.json(tour);
};

// GET all tours
exports.getAllTours = async (req, res) => {
  const { title, city, state, startDate, price } = req.query

  const titleMatch = {
    $regex: title || "",
    $options: 'i',
  }
  const cityMatch = {
    $regex: city || "",
    $options: 'i',
  }
  const stateMatch = {
    $regex: state || "",
    $options: 'i',
  }
  const startDateMatch = {
    $regex: startDate || "",
    $options: 'i',
  }

  const result = Object.keys(req.query).length > 0 ?
    {$and: [
      { price: {$lte: price } },
      { title: titleMatch !== "" ? titleMatch : null },
      { city: cityMatch !== "" ? cityMatch : null },
      { state: stateMatch !== "" ? stateMatch : null },
      { startDate: startDateMatch !== "" ? startDateMatch : null },
    ]} : {}

  const tour = await Tour.find(result)
  .populate('availability').populate('bookings')
  .populate('reviews').exec();
  return res.json(tour);
};

// PUT one tour
exports.updateTour = async (req, res) => {
  const { slug } = req.params;
  const { state, city, title, subtitle, introduction, highlights, included,
    itinerary, price, image, startDate, endDate, map } = req.body;

  if (moment(startDate, "DD/MM/YYYY").isAfter(moment(endDate, "DD/MM/YYYY"))) {
    return res.status(400).send('End date should not be prior to the Start date');
  }

  const tour = await Tour.findOneAndUpdate({slug},
    { state, city, title, subtitle, introduction, highlights, included, itinerary, price, image, map, startDate, endDate },
    {new: true, runValidators: true}, (err)=>{
      if(err){
        return res.status(422).json(err)
      }
  }).exec();
  if (!tour) {
    return res.sendStatus(404);
  }
  return res.status(200).json(tour);
};

// DELETE one tour
exports.deleteTour = async (req, res) => {
  const { slug } = req.params;
  const tour = await Tour.findOneAndRemove({slug}).exec();
  if (!tour) {
    return res.sendStatus(404);
  }
  return res.status(204).json(tour);
};

// Availability
exports.addAvailabilityToTour = async (req, res) => {
  const { availabilityId, tourId } = req.params;
  const availability = await Availability.findById(availabilityId).exec();
  const tour = await Tour.findById(tourId).exec();
  if (!availability || !tour) {
    return res.sendStatus(404);
  }
  availability.tour = tour._id;
  tour.availability.addToSet(availability._id);
  await availability.save();
  await tour.save();
  return res.status(200).json(tour);
}

exports.deleteAvailabilityFromTour = async (req, res) => {
  const { availabilityId, tourId } = req.params;
  const availability = await Availability.findById(availabilityId).exec();
  const tour = await Tour.findById(tourId).exec();
  if (!availability || !tour) {
    return res.sendStatus(404);
  }
  availability.tour = null;
  tour.availability.pull(availability._id);
  await availability.save();
  await tour.save();
  return res.status(200).json(tour);
}

// Booking
exports.addBookingToTour = async(req, res) => {
  const {tourId, bookingId} = req.params;
  const tour = await Tour.findById(tourId).exec();
  const booking = await Booking.findById(bookingId).exec();
  if (!tour || !booking) {
    return res.sendStatus(404);
  }
  tour.bookings.addToSet(booking._id);
  booking.tour = tour._id;
  await booking.save();
  await tour.save();
  return res.status(200).json(tour);
}

exports.deleteBookingFromTour = async(req, res) => {
  const {tourId, bookingId} = req.params;
  const tour = await Tour.findById(tourId).exec();
  const booking = await Booking.findById(bookingId).exec();
  if (!tour || !booking) {
    return res.sendStatus(404);
  }
  tour.bookings.pull(booking._id);
  booking.tour = null;
  await booking.save();
  await tour.save();
  return res.status(200).json(tour);
}

// Review
exports.addReviewToTour = async(req, res) => {
  const {tourId, reviewId} = req.params;
  const tour = await Tour.findById(tourId).exec();
  const review = await Review.findById(reviewId).exec();
  if (!tour || !review) {
    return res.sendStatus(404);
  }
  tour.reviews.addToSet(review._id);
  review.tour = tour._id;
  await review.save();
  await tour.save();
  return res.status(200).json(tour);
}

exports.deleteReviewFromTour = async(req, res) => {
  const {tourId, reviewId} = req.params;
  const tour = await Tour.findById(tourId).exec();
  const review = await Review.findById(reviewId).exec();
  if (!tour || !review) {
    return res.sendStatus(404);
  }
  tour.reviews.pull(review._id);
  review.tour.pull(tour._id);
  await review.save();
  await tour.save();
  return res.status(200).json(tour);
}
