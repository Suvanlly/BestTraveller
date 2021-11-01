const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');

const request = supertest(app);
const Location = require('../../models/location');
const Tour = require('../../models/tour/tour')

beforeAll(async () => {
  await Location.deleteMany({});
  const location = new Location({
    _id: mongoose.Types.ObjectId('5c793331bc99fc1510b846b7'),
    city: 'perth',
    state: 'wa'
  });
  await location.save();

  await Tour.deleteMany({});
  const tour = new Tour({
    _id: mongoose.Types.ObjectId('55153a8014829a865bbf700d'),
    city: 'Melbourne',
    title: '3 Day Great Ocean Road & 12 Apostles Tour',
    subtitle: 'Top Great Ocean Road tour with unforgettable views of the ocean from dramatic cliffs and pristine beaches',
    introduction: 'Our Great Ocean Road day trips from Melbourne depart the city in the morning, joining the road at its starting point in Torquay',
    highlights: [
      "The 12 Apostles",
      "Surf Coast",
      "Otway Rainforest",
    ],
    included: [
      "National Park fees",
      "A friendly and informative guide",
      "A luxury bus with Wifi and reclining seats",
      "Central Melbourne CBD pickup location",
    ],
    itinerary: [
      "Heads straight to the western side of the road, a stop at Kennett River to view koalas in their natural habitat and spending the night in Port Campbell",
      "A guided walk at Maits Rest in the Otway Rainforest and stays overnight in Torquay to jump on a ferry to Sorrento on day two",
      "Explore the wild environment of the Grampians on day three and learn the fascinating history and culture of the indigenous people of the area"
    ],
    price: 389,
    startDate:"01/08/2021",
    endDate:"04/08/2021",
  });
  await tour.save();
});
// Disconnect database after test
afterAll(async () => {
  await Location.deleteMany({});
  await Tour.deleteMany({});
  await mongoose.disconnect();
});

it('locationCreateTest is running...', async () => {
  const res = await request.post('/api/v1/locations').send({
    city: 'sydney',
    state: 'nsw'
  });
  const location = await Location.findOne({ city: 'sydney' });

  // 201 Created
  expect(res.statusCode).toBe(201);
  expect(location.city).toBe('sydney');
});


it('locationGetTest is running...', async () => {
    const res = await request.get(`/api/v1/locations/5c793331bc99fc1510b846b7`);

    // Search location in the database
    expect(res.statusCode).toBe(201);
})


it('locationUpdateTest is running...', async () => {
  const res = await request.patch(`/api/v1/locations/5c793331bc99fc1510b846b7`).send({
    city: 'melbourne',
  });
  expect(res.statusCode).toBe(201);
})


it('addTourToLocationTest is running...', async () => {
  const res = await request.post(`/api/v1/locations/5c793331bc99fc1510b846b7/tours/55153a8014829a865bbf700d`)
  expect(res.statusCode).toBe(200)
})

it('deleteTourFromLocationTest is running...', async () => {
    const res = await request.delete(`/api/v1/locations/5c793331bc99fc1510b846b7/tours/55153a8014829a865bbf700d`)
    expect(res.statusCode).toBe(200)
})

it('locationDeleteTest is running...', async () => {
  const res = await request.delete(`/api/v1/locations/5c793331bc99fc1510b846b7`);
  // 204 No content
  expect(res.statusCode).toBe(204);
});
