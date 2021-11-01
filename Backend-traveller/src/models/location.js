const {Schema, model} = require('mongoose');

const locationSchema = new Schema({
  city: {
    type: String,
    required: [true, 'You must enter a valid city name'],
    lowercase: true,
    unique: true,
    trim: true,
  },
  state: {
    type: String,
    required: [true, 'You must enter a valid state name'],
    uppercase: true,
    trim: true,
  },
  tours: [
    {
      type: Schema.Types.String,
      ref: 'Tour'
    }
  ],
});


module.exports = model('Location', locationSchema);
