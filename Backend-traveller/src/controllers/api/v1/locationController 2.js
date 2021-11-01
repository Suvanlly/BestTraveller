const Location = require('../../../models/location');
const Tour = require('../../../models/tour/tour')

exports.createLocation = async (req, res) => {
  const {city, state} = req.body;
  const location = Location({city, state});
  try {
    await location.save();
    res.status(201).send({ location });
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find(req.query);
    res.status(200).json({
      status: 'success',
      data: {
        number: locations.length,
        locations,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error occurred',
    });
  }
};

exports.getLocation = async function (req, res, next) {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      res.status(404).json({
        message: 'location is not found',
      });
      return next();
    }
    res.status(201).json({
      status: 'success',
      data: {
        location,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error occured',
    });
  }
  return next();
};

exports.updateLocation = async function (req, res, next) {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!location) {
      res.status(404).json({
        message: 'location is not found',
      });
      return next();
    }
    res.status(201).json({
      status: 'success',
      data: {
        location,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error occured',
    });
  }
  return next();
};

exports.deleteLocation = async function (req, res, next) {
  const location = await Location.findByIdAndDelete(req.params.id);

  if (!location) {
    res.status(404).json({
      message: 'location is not exist',
    });
    return next();
  }

  res.status(204).json({
    status: 'success',
    message: 'location has been deleted',
    data: null,
  });
  return next();
};

// Tour
exports.addTourToLocation = async (req, res) => {
  const {locationId, tourId } = req.params
  const tour = await Tour.findById(tourId).exec();
  const locations = await Location.findById(locationId).exec();
  if (!tour || !locations) {
    return res.sendStatus(404);
  }
  locations.tours.addToSet(tour._id);
  tour.location.id = locations._id;
  tour.location.state = locations.state;
  tour.location.city = locations.city;
  await tour.save();
  await locations.save();
  return res.status(200).json(locations);
}

exports.deleteTourFromLocation = async (req, res) => {
  const {locationId, tourId } = req.params
  const tour = await Tour.findById(tourId).exec();
  const location = await Location.findById(locationId).exec();
  if (!tour || !location) {
    return res.sendStatus(404);
  }
  tour.location.id = null;
  tour.location.state = null;
  tour.location.city = null;
  location.tours.pull(tour.title);
  await tour.save();
  await location.save();
  return res.status(200).json(location);
}