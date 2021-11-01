const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');
const User = require('../../models/user');
const mongooseLoader = require('../../loaders/mongoose');

const request = supertest(app);
beforeAll(async () => {
  mongooseLoader();
  await User.deleteMany({});
  const user = new User({
    email: 'fancy@test.com',
    password: '123456789',
    firstName: 'Brenda',
    lastName: 'Lee',
    dateOfBirth: '01/07/2021',
  });
  await user.hashPassword();
  await user.save();
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.disconnect();
});

// create a user
it('should return 201 if request is valid', async () => {
  const res = await request.post('/api/v1/users').send({
    email: '9@gmail.com',
    firstName: 'Nan',
    lastName: 'Guo',
    dateOfBirth: '29/09/1999',
    password: 'test1234',
    role: 'user',
  });
  expect(res.statusCode).toBe(201);
});

it('should return 409 if email is existed', async () => {
  const res = await request.post('/api/v1/users').send({
    email: '9@gmail.com',
    firstName: 'Nan',
    lastName: 'Guo',
    dateOfBirth: '29/09/1999',
    password: 'test1234',
    role: 'user',
  });
  expect(res.statusCode).toBe(409);
});

it('should return 400 if password is less than 6 digital', async () => {
  const res = await request.post('/api/v1/users').send({
    email: '8@gmail.com',
    firstName: 'Nan',
    lastName: 'Guo',
    dateOfBirth: '29/09/1999',
    password: 'test',
    role: 'user',
  });
  expect(res.statusCode).toBe(400);
});

it('should return 400 if DOB is later than today', async () => {
  const res = await request.post('/api/v1/users').send({
    email: '7@gmail.com',
    firstName: 'Nan',
    lastName: 'Guo',
    dateOfBirth: '29/09/2022',
    password: 'test1234',
    role: 'user',
  });
  expect(res.statusCode).toBe(400);
});

// get all users
it('should return 200 if request is valid', async () => {
  const res = await request.get('/api/v1/users');
  expect(res.statusCode).toBe(200);
});

// get user by id(email)
it('should return 200 if get user by id', async () => {
  const res = await request.get('/api/v1/users/9@gmail.com');
  expect(res.statusCode).toBe(200);
});

// update user by id(email)
it('should return 200 if update user by id', async () => {
  const res = await request.patch('/api/v1/users/9@gmail.com').send({
    firstName: 'Brenda',
    lastName: 'Guo',
    dateOfBirth: '29/09/1999',
    password: 'test1234',
    role: 'user',
  });
  expect(res.body.firstName).toBe('Brenda');
  expect(res.statusCode).toBe(200);
});

// delete user by id(email)
it('should return 200 delete user by id', async () => {
  const res = await request.delete('/api/v1/users/fancy@test.com');
  expect(res.statusCode).toBe(204);
});
