/* eslint-disable class-methods-use-this */
const nodemailer = require('nodemailer')
const pug = require('pug')
const htmlToText = require('html-to-text')

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email || user
    this.firstName = user.firstName || 'there'
    this.url = url
    this.from = 'bestravellers@gmail.com'
  }

  newTransport() {
    // Sendgrid
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    })

  }

  // Send the acatual email
  async send(template, subject) {
    // Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    })

    // Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
      // html:
    }

    // Create transport and send email
    await this.newTransport().sendMail(mailOptions)
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to BestTraveller')
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password secret key (valid for only 10 mins)'
    )
  }

  async sendSubscribe() {
    await this.send('subscribe', 'Thank you for subscribing BestTraveller')
  }
}
