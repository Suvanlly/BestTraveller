const express = require('express');

const router = new express.Router();
const userController = require('../../controllers/api/v1/userController');

router.patch('/updateMe', userController.updateMe)
router.get('/', userController.getAllUsers);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

router.post('/:userId/bookings/:bookingId', userController.addBookingToUser)
router.delete('/:userId/bookings/:bookingId', userController.deleteBookingFromUser)

router.post('/:userId/reviews/:reviewId', userController.addReviewToUser)
router.delete('/:userId/reviews/:reviewId', userController.deleteReviewFromUser)

module.exports = router;
