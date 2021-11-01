const express = require('express');

const router = new express.Router();
const bookingController = require('../../controllers/api/v1/bookingController');

router.get('/getMyBookings/:id', bookingController.getMyBookings)
router.get('/', bookingController.getAllBookings);
router.patch('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBookinig);
router.post('/', bookingController.createBooking);
router.get('/:id', bookingController.getBooking);
router.get(
    '/checkout-session/:userId/:tourId',
    bookingController.getCheckoutSession
);

module.exports = router;
