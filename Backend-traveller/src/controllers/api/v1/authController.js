const crypto = require('crypto');
const { generateToken } = require('../../../utils/auth');
const User = require('../../../models/user');
const Email = require('../../../utils/email')

exports.subscribe = async (req, res) => {
  const email = req.body.email;
  if (!email) return res.status(500).json({ error: 'Email is not valid'})
  await new Email(email, '').sendSubscribe()

  return res.status(200).json({ status: 'success'});
}

// User login
exports.login = async (req, res) => {
  // Check if email or password is empty
  const isDefined = req.body.email && req.body.password;
  if (!isDefined) return res.status(400).send({ error: 'Email or password not defined' });

  // Check if the user is register in database
  const { email, password } = req.body;
  const user = await User.findOne({ _id: email }).select('+password').exec();
  if (!user) return res.status(404).json({ error: 'Email not found' });

  // Check if the password is correct
  const validatePassword = await user.validatePassword(password);
  if (!validatePassword) return res.status(401).json({ error: 'Invalid password' });

  return res.status(200).json({ token: generateToken({ email }), user });
};

// Create and send token to user
// Cookie used to identify user identity and save history by websites
const createSendToken = (user, statusCode, res) => {
  const token = generateToken(user._id)

  // Remove password from output
  // eslint-disable-next-line no-param-reassign
  user.password = undefined

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}


// User forgot password
exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ _id: req.body.email })

  // User not found
  if (!user) return res.status(404).send({ error: 'Email or password not defined' })

  // Generate the random reset token
  const resetToken = user.createPasswordResetToken()

  // Turn validateBeforeSave to false in order to only save the new token
  await user.save({ validateBeforeSave: false })

  // Send it to user's email
  try {
    const resetURL = `${resetToken}`
    await new Email(user, resetURL).sendPasswordReset()

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email'
    })
  } catch (err) {
    return res.status(500).send({ error: 'There was an error sending the email. Try again later' })
  }
}

exports.resetPassword = async (req, res) => {
  // Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex')
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  })
  // If token has not expired, and there is a user, set the new password
  if (!user) {
    return res.status(400).send({ error: 'Token is invalid or has expired' })
  }

  // Update changePasswordAt property for the user
  user.password = req.body.password
  user.passwordResetToken = undefined
  user.passwordResetExpires = undefined
  await user.hashPassword();
  await user.save()

  // Log the user in, send JWT
  createSendToken(user, 200, res)
}

exports.updatePassword = (async (req, res, next) => {
  // Get user from collection
  const user = await User.findOne({_id: req.body.email}).select('+password')
  // Check if POSTed current password is correct
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next('Your current password is wrong')
  }

  // If so, update password
  user.password = req.body.newPassword
  user.passwordConfirm = req.body.confirmedPassword
  await user.hashPassword();
  await user.save()
  // User.findByIdAndUpdate will NOT work as intended

  // Log user in, send JWT
  createSendToken(user, 200, res)
})