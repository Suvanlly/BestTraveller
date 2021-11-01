const supertest = require('supertest');
const mongoose = require('mongoose');
const Booking = require('../../models/booking');
const app = require('../../../app');

const request = supertest(app);

beforeAll(async () => {
    await Booking.deleteMany({});
    const booking = new Booking({
        _id: mongoose.Types.ObjectId('5c793331bc99fc1510b846b8'),
        price: 250,
        paid: true,
    })
    await booking.save()
    });
afterAll(async () => {
    await Booking.deleteMany({});
    await mongoose.disconnect();
    });

// post
it('should return 201 if post is valid',  async () => {
    const res = await request
        .post("/api/v1/bookings")
        .send({price: 250, paid: true});
        expect(res.body.booking).toHaveProperty("_id");
        expect(res.body.booking.price).toBe(250);
        expect(res.body.booking.paid).toBe(true);
        expect(res.statusCode).toBe(201);
})
// get all
it('should return 200 if get all is valid', async ()=>{
    const res = await request
    .get("/api/v1/bookings")
    expect(res.statusCode).toBe(200);
})
// get by id
it('should return 200 if get by id is valid', async ()=>{
    const res = await request
    .get("/api/v1/bookings/5c793331bc99fc1510b846b8")
    expect(res.statusCode).toBe(200);
})

// patch
it('should return 200 if patch is valid', async ()=>{
    const res = await request
    .patch("/api/v1/bookings/5c793331bc99fc1510b846b8")
    .send({paid: false})
    expect(res.body.data.data.paid).toBe(false);
    expect(res.statusCode).toBe(200);
})

// delete
it('should return 200 if delete is valid', async ()=>{
    const res = await request
    .delete("/api/v1/bookings/5c793331bc99fc1510b846b8")
    expect(res.statusCode).toBe(204);
})
