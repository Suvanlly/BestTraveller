/* eslint-disable no-return-await */
/* eslint-disable object-shorthand */
const { Schema, model } = require('mongoose');
const Joi = require('joi');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const crypto = require('crypto')

const userSchema = new Schema(
  {
    _id: {
      type: String,
      alias: 'email',
      lowercase: true,
      validate: {
        validator: (email) => !Joi.string().email().validate(email).error,
        message: 'Invalid email format',
      },
    },
    firstName: {
      type: String,
      required: [true, 'Please tell us your first name'],
      trim: true,
      minLength: 2,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: [true, 'Please tell us your last name'],
      trim: true,
      minlength: 2,
      maxlength: 20,
    },
    dateOfBirth: {
      type: String,
      required: [true, 'please tell us your date of birth'],
      validate: {
        validator: (date) =>
          moment(date, 'DD/MM/YYYY').isSameOrBefore(moment()),
        msg: 'Invalid Date',
      },
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      select: false, // don't send out passwords in responses
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    __v: {
      type: Number,
      select: false,
    },
    image: { type: String, default: 'default.jpg' },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
);

userSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Check password is matched with database
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword)
}

// Create token for password reset
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex')

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000

  return resetToken
}

module.exports = model('User', userSchema);