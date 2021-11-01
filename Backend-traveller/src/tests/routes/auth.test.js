const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');
const User = require('../../models/user');

// Auth router
describe('/api/v1/auth', () => {
  // Setup testing & adding default test user
  beforeAll(async () => {
    const user = new User({
      email: 'test@gmail.com',
      password: '123456789',
      firstName: 'Haoran',
      lastName: 'Zhang',
      dateOfBirth: '01/07/2021',
    });
    await user.hashPassword();
    await user.save();
  });
  // Finished testing & delete testing data
  afterAll(async () => {
    // await User.deleteMany({});
    await mongoose.disconnect();
  });

  // User login
  describe('POST', () => {
    const request = (data) => supertest(app).post('/api/v1/auth/login').send(data);

    // Valid email & password
    it('should return 200 if request contain valid email and password', async () => {
      const data = { email: 'test@gmail.com', password: '123456789' };
      const res = await request(data);
      expect(res.statusCode).toBe(200);
    });

    // Email or password is empty
    it('should return 400 if request body does not contain email or password', async () => {
      const data = {};
      const res = await request(data);
      expect(res.statusCode).toBe(400);
    });

    // Email does not find
    it('should return 404 if email does not find in database', async () => {
      const data = { email: 'NotExistTest@gmail.com', password: '123456789' };
      const res = await request(data);
      expect(res.statusCode).toBe(404);
    });

    // Password not correct
    it('should return 401 if password does not match email in database', async () => {
      const data = { email: 'test@gmail.com', password: '111' };
      const res = await request(data);
      expect(res.statusCode).toBe(401);
    });
  });
});
