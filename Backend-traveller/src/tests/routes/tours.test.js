const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');
const Tour = require('../../models/tour/tour');

const request = supertest(app);


describe('/tours', () => {
  // hooks
  afterAll(async () => {
    await Tour.deleteMany({})
    await mongoose.disconnect();
  });

  // Create a new tour
  it('should return 201 if post is valid',  async () => {
    const res = await request
        .post("/api/v1/tours")
        .send({title: 'Amazing Tour',
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
        itinerary: [{"image": "sydney-1",
          "route": "Heads straight to the western side of the road, a stop at Kennett River to view koalas in their natural habitat and spending the night in Port Campbell"},
          {"image":"sydney-2", "route": "A guided walk at Maits Rest in the Otway Rainforest and stays overnight in Torquay to jump on a ferry to Sorrento on day two"}],
        price: 389,
        startDate: "01/08/2021",
        endDate: "04/08/2021",
        state: "NSW",
        city: "sydney"});
        expect(res.statusCode).toBe(201);
})

  // Get tour by slug
  describe('GET', () => {
    it('should return 200 if request is valid', async () => {
      const data = await request.get(`/api/v1/tours/amazing-tour`);
      expect(data.statusCode).toBe(200);
    })
  });

  // Get all tour
  describe('GET', () => {
    it('should return 200 if request is valid', async () => {
      const data = await request.get(`/api/v1/tours/`);
      expect(data.statusCode).toBe(200);
    })
  });

  // Update tour by ID
  describe('PATCH', () => {
    it('should return 204 if request is valid', async () => {
      const data = await request.patch(`/api/v1/tours/amazing-tour`).send({title: 'Amazing Tour',
      subtitle: 'Top Great Ocean Road tour with unforgettable views of the ocean from dramatic cliffs and pristine beaches',
      introduction: 'Our Great Ocean Road day trips from Melbourne depart the city in the morning, joining the road at its starting point in Torquay',
      highlights: [
        "Update tour",
        "Surf Coast",
        "Otway Rainforest",
      ],
      included: [
        "National Park fees",
        "A friendly and informative guide",
        "A luxury bus with Wifi and reclining seats",
        "Central Melbourne CBD pickup location",
      ],
      itinerary: [{"image": "sydney-1",
        "route": "Heads straight to the western side of the road, a stop at Kennett River to view koalas in their natural habitat and spending the night in Port Campbell"},
        {"image":"sydney-2", "route": "A guided walk at Maits Rest in the Otway Rainforest and stays overnight in Torquay to jump on a ferry to Sorrento on day two"}],
      price: 389,
      startDate: "01/08/2021",
      endDate: "04/08/2021",
      state: "NSW",
      city: "sydney"});
      expect(data.statusCode).toBe(200);
    })
  });

  // Delete tour by ID
  describe('DELETE', () => {
    it('should return 204 if request is valid', async () => {
      const data = await request.delete(`/api/v1/tours/amazing-tour`);
      expect(data.statusCode).toBe(204);
    })
  });
});