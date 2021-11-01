const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../app');
const Tour = require('../../models/tour/tour');

const request = supertest(app);


describe('/tours', () => {
  // hooks
  beforeAll(async () => {
    await Tour.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await Tour.deleteMany({});
    
  });

  afterEach(async () => {
    await Tour.deleteMany({});
  });

  // New data
  const validTour = {
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
    startDate: "01/08/2021",
    endDate: "04/08/2021",
  };

  // Update data
  const updateTour = {
    title: 'this is update data',
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
    startDate: "01/08/2021",
    endDate: "04/08/2021",
  };

  // Get tour by ID
  describe('GET', () => {
    const createTour = async (body) => request.post('/api/v1/tours').send(body);
    it('should return 200 if request is valid', async () => {
      await createTour(validTour);
      const tour = await Tour.findOne({title: validTour.title});
      const data = await request.get(`/api/v1/tours/${tour._id}`);
      expect(data.statusCode).toBe(200);
    })
  });

  // Get all tour
  describe('GET', () => {
    const createTour = async (body) => request.post('/api/v1/tours').send(body);
    it('should return 200 if request is valid', async () => {
      await createTour(validTour);
      const data = await request.get(`/api/v1/tours/`);
      expect(data.statusCode).toBe(200);
    })
  });

  // Delete tour by ID
  describe('DELETE', () => {
    const createTour = async (body) => request.post('/api/v1/tours').send(body);
    it('should return 204 if request is valid', async () => {
      await createTour(validTour);
      const tour = await Tour.findOne({title: validTour.title});
      const data = await request.delete(`/api/v1/tours/${tour._id}`);
      expect(data.statusCode).toBe(204);
    })
  });

  // Update tour by ID
  describe('PATCH', () => {
    const createTour = async (body) => request.post('/api/v1/tours').send(body);
    it('should return 204 if request is valid', async () => {
      await createTour(validTour);
      const tour = await Tour.findOne({title: validTour.title});
      const data = await request.patch(`/api/v1/tours/${tour._id}`).send(updateTour);
      expect(data.statusCode).toBe(200);
      expect(data.body.title).toBe(updateTour.title);
    })
  });

  // Create a new tour
  describe('POST', () => {
    const createTour = async (body) => request.post('/api/v1/tours').send(body);
    it('should return 201 if request is valid', async () => {
      const res = await createTour(validTour);
      expect(res.statusCode).toBe(201);
    });

    it('should save student to database if request is valid', async () => {
      await createTour(validTour);
      const tour = await Tour.findOne({title: validTour.title});
      expect(tour.subtitle).toBe(validTour.subtitle);
      expect(tour.introduction).toBe(validTour.introduction);
      expect(tour.highlights[0]).toBe(validTour.highlights[0]);
      expect(tour.included[0]).toBe(validTour.included[0]);
      expect(tour.itinerary[0]).toBe(validTour.itinerary[0]);
      expect(tour.price).toBe(validTour.price);
      expect(tour.startDate).toBe(validTour.startDate);
      expect(tour.endDate).toBe(validTour.endDate);
    });

    // Check all invalidated situation
    it.each`
      field             | value
      ${'title'}        | ${undefined}
      ${'subtitle'}     | ${undefined}
      ${'introduction'} | ${undefined}
      ${'price'}        | ${undefined}
      ${'price'}        | ${-1}
      ${'price'}        | ${1.223}
      ${'startDate'}    | ${undefined}
      ${'endDate'}      | ${undefined}
      ${'startDate'}    | ${'06/06/2022'}
      ${'startDate'}    | ${'06/06/202'}
      ${'startDate'}    | ${'06/6/2022'}
      ${'startDate'}    | ${'6/06/2022'}
      ${'endDate'}      | ${'06/06/202'}
      ${'endDate'}      | ${'06/6/2022'}
      ${'endDate'}      | ${'6/06/2022'}
      ${'endDate'}      | ${'06/06/2021'}
    `('should return 400 when $field is $value', async ({ field, value }) => {
      const tour = { ...validTour };
      tour[field] = value;
      const res = await createTour(tour);
      expect(res.statusCode).toBe(400);
    });
  });
});
