const express = require('express');

const router = new express.Router();

const availabilityRoute = require('./tourRoutes/availabilities');
const tourRoute = require('./tourRoutes/tours');
const userRoute = require('./userRoutes');
const reviewRoute = require('./reviewRoutes');
const locationRoute = require('./locationRoutes');
const authRoute = require('./authRoutes');
const bookingsRoute = require('./bookingRoutes');

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/tours', tourRoute);
router.use('/availabilities', availabilityRoute);
router.use('/reviews', reviewRoute);
router.use('/bookings', bookingsRoute);
router.use('/locations', locationRoute);
module.exports = router;