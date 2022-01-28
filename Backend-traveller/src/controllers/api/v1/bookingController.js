const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const Booking = require('../../../models/booking');
const Tour = require('../../../models/tour/tour');

exports.getCheckoutSession = async (req, res, next) => {
   // Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId)

   // Create checkout session
  const session = await stripe.checkout.sessions.create({
     payment_method_types: ['card'],
     success_url: `http://bestravellers.com`,
     cancel_url: `http://bestravellers.com/tour-detail`,
     client_reference_id: req.params.tourId,
     line_items: [
      {
        name: `${tour.title} Tour`,
        description: tour.subtitle,
        amount: tour.price * 100,
        currency: 'aud',
        quantity: 1,
      },
    ],
   })
   const tour_id = req.params.tourId
   const user_id = req.params.userId
   const tour_price = tour.price

   if (!tour_id && !user_id && !tour_price) return next()
   await Booking.create({ tour: tour_id, user: user_id, price: tour_price })
   // Create session as response
   res.status(200).json({
     status: 'success',
     session
   });
}

exports.createBooking = async (req, res) => {
  const { paid, price } = req.body;
  const booking = new Booking({ paid, price });
  try {
    await booking.save();
    res.status(201).send({ booking });
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.getBooking = async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findById(id)
  .populate('tour').populate('user').exec();
  if (!booking) {
    return res.sendStatus(404).json('No document found with that ID');
  }
  try {
    res.status(200).json({
      status: 'success',
      data: {
        data: booking,
      },
    });
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.getMyBookings = async (req, res) => {
  const bookings = await Booking.find({user: req.params.id}).exec()
  const tourIDs =  bookings.map((item) => item.tour)
  const tours = await Tour.find({ _id: { $in: tourIDs } })
  try {
    res.status(200).json({
      status: 'success',
      data: {
        tours,
      },
    });
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find().exec();
  try {
    res.status(200).json({
      status: 'success',
      data: {
        data: bookings,
      },
    });
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const { paid, price } = req.body;
  const booking = await Booking.findByIdAndUpdate(id, { paid, price }, { new: true }).exec();
  if (!booking) {
    return res.sendStatus(404).json('No document found with that ID');
  }
  try {
    res.status(200).json({
      status: 'success',
      data: {
        data: booking,
      },
    });
  } catch (e) {
    res.status(400).send(e);
  }
}

exports.deleteBookinig = async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByIdAndDelete(id).exec();
  if (!booking) {
    return res.sendStatus(404).json('No document found with that ID');
  }
  try {
    res.status(204).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  } catch (e) {
    res.status(400).send(e);
  }
}

