const { Schema, model } = require('mongoose');
const moment = require('moment');
const Joi = require('joi');

const availabilitySchema = new Schema({
  // date should be in DD/MM/YYYY format and no later than today
  date: {
    type: String,
    required: true,
    validate: {
      validator: (date) =>
        moment(date, 'DD/MM/YYYY', true).isValid() &&
        moment(date, 'DD/MM/YYYY').isSameOrAfter(moment()),
      msg: 'Invalid Date',
    },
  },
  stock: {
    type: Number,
    required: true,
    validate: {
      validator: (stock) => !Joi.number().integer().min(0).validate(stock).error,
      msg: 'Number must be greater than 0 and integer',
    },
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour',
  },
});

module.exports = model('Availability', availabilitySchema);
