const {Schema, model} = require('mongoose');
const cityTemplate = require('../utils/city');

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

// Delete space in word
// Issues on Gold Coast-like works
locationSchema.pre('save', async function (next) {
  this.city = await this.city.replace(/ +/g, '');
  // Try to match city in database after input validation
  for (let i = 0; i < cityTemplate.length; i++) {
    if (this.city === cityTemplate[i]) {
      return next();
    }
  }
  return next('City is not found');
});

module.exports = model('Location', locationSchema);
