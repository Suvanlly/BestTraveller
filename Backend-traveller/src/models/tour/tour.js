const { Schema, model } = require('mongoose');
const slugify = require('slugify')
const moment = require('moment');
const Joi = require('joi');

const tourSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },

  // Optional
  highlights: [
    {
      type: String,
    },
  ],
  // Could create a new collection
  // Array's default is [] - add a function in controller
  included: [
    {
      type: String,
      required: true,
    }
  ],
  // Daily tour details
  // Could create a new collection
  itinerary: [{
      image: String,
      route: String,
    },
  ],
  // Here needs to check availability collection
  // Relate to availability
  availability: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Availability',
    },
  ],

  price: {
    type: Number,
    required: true,
    validate: {
      validator: (price) =>
        !Joi.number().precision(2).positive().validate(price, { convert: false }).error,
      msg: 'Please input correct price',
    },
  },
  // Check with front-end
  image: {
    type: String,
  },

  // GeoJSON
  map: {
    type: {
      type: String,
      enum: ['Point'], // 'map.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
    }
  },
  startDate: {
    type: String,
    required: true,
    validate: {
      validator: (date) =>
        moment(date, 'DD/MM/YYYY', true).isValid(),
      msg: 'Invalid Date Format',
    },
  },
  endDate: {
    type: String,
    required: true,
    validate: {
      validator: (date) =>
        moment(date, 'DD/MM/YYYY', true).isValid(),
      msg: 'Invalid Date Format',
    },
  },
  bookings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Booking',
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
  slug: String,
});

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true })
  next()
})

module.exports = model('Tour', tourSchema);