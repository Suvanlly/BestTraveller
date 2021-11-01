const multer = require('multer')
const sharp = require('sharp')
const User = require('../../../models/user');
const Booking = require('../../../models/booking');
const Review = require('../../../models/review')
const { generateToken } = require('../../../utils/auth');
const Email = require('../../../utils/email')

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb(('Not an image! Please upload only images', 400), false)
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
})

exports.uploadUserPhoto = upload.single('photo')

exports.resizeUserPhoto = (async (req, res, next) => {
  if (!req.file) return next()

  req.file.filename = `user-${req.body.id}-${Date.now()}.jpeg`

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`)

  next()
})

const filterObj = (obj, ...allowedFields) => {
  const newObj = {}
  Object.keys(obj).forEach((item) => {
    if (allowedFields.includes(item)) newObj[item] = obj[item]
  })
  return newObj
}


// Update user's name and email
exports.updateMe = (async (req, res) => {
  // Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'firstName', 'lastName', 'email', 'image')
  if (req.file) filteredBody.userImage = req.file.filename
  // Update user document
  const upDatedUser = await User.findByIdAndUpdate({_id: req.body.email}, filteredBody, {
    new: true,
    runValidators: true,
  })
  res.status(200).json({
    status: 'success',
    data: {
      user: upDatedUser,
    },
  })
})

// POST one user
exports.createUser = async (req, res) => {
  // get data
  const { email, firstName, lastName, dateOfBirth, password } = req.body;
  // check if user already exists
  const existUser = await User.findOne({_id: email}).exec();
  if (existUser) {
    return res.status(409).send('This email already exist');
  }
  if (password.length < 6) {
    return res.status(400).send('Password is at least 6 characters long')
  }
  // create user in database
  const user = new User({
    _id: email,
    firstName,
    lastName,
    dateOfBirth,
    password,
  });
  await user.hashPassword();
  try {
    await user.save();
    const token = generateToken(email);
    await new Email(user, '').sendWelcome()
    res.status(201).send({ token, email });
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET all users
exports.getAllUsers = async (req, res) => {
  const users = await User.find()
  .populate('bookings').populate('reviews').exec();
  try {
    res.status(200).json(users);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET one user
exports.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id)
  .populate('bookings').populate('reviews').exec();
  if (!user) {
    return res.status(404).send('No record found with that user');
  }
  try {
    return res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

// PUT one user
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, firstName, lastName, dateOfBirth, password, role } = req.body;
  // get data
  const user = await User.findByIdAndUpdate(
    id,
    { email, firstName, lastName, dateOfBirth, password, role },
    { new: true, runValidators: true},
  ).exec();
  if (!user) {
    return res.status(404).send('No record found with that user');
  }
  try {
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

// DELETE one user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id).exec();
  if (!user) {
    return res.status(404).send('No record found with that user');
  }
  try {
    return res.sendStatus(204);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.addBookingToUser = async(req, res) => {
  const {userId, bookingId} = req.params;
  const user = await User.findById(userId).exec();
  const booking = await Booking.findById(bookingId).exec();
  if (!user || !booking) {
    return res.sendStatus(404);
  }
  user.bookings.addToSet(booking._id);
  booking.user = user._id;
  await booking.save();
  await user.save();
  return res.status(200).json(booking);
}

exports.deleteBookingFromUser = async(req, res) => {
  const {userId, bookingId} = req.params;
  const user = await User.findById(userId).exec();
  const booking = await Booking.findById(bookingId).exec();
  if (!user || !booking) {
    return res.sendStatus(404);
  }
  user.bookings.pull(booking._id);
  booking.user = '';
  await booking.save();
  await user.save();
  return res.status(200).json(booking);
}

exports.addReviewToUser = async(req, res) => {
  const {userId, reviewId} = req.params;
  const user = await User.findById(userId).exec();
  const review = await Review.findById(reviewId).exec();
  if (!user || !review) {
    return res.sendStatus(404);
  }
  user.reviews.addToSet(review._id);
  review.user.addToSet(user._id);
  await review.save();
  await user.save();
  return res.status(200).json(review);
}

exports.deleteReviewFromUser = async(req, res) => {
  const {userId, reviewId} = req.params;
  const user = await User.findById(userId).exec();
  const review = await Review.findById(reviewId).exec();
  if (!user || !review) {
    return res.sendStatus(404);
  }
  user.reviews.pull(review._id);
  review.user.pull(user._id);
  await review.save();
  await user.save();
  return res.status(200).json(review);
}