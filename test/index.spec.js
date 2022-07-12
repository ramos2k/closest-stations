const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
require("dotenv").config();

describe("Testing In Closest Stations API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/").send();
    });

    it("Should respond with a 200 status code", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
  });

  describe("GET /stations", () => {
    it("Should respond with a 200 status code, returns at list one station", async () => {
      const queryParams = {
        latitude: 20.66633,
        longitude: -103.399683,
      };
      const response = await request(app)
        .get("/stations")
        .query(queryParams)
        .send();
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("Should respond with a 404 status code because didn't found any close station", async () => {
      const queryParams = {
        latitude: 20.611302215117348,
        longitude: -105.23391139916188,
      };
      const response = await request(app)
        .get("/stations")
        .query(queryParams)
        .send();
      expect(response.status).toBe(404);
      expect(response.headers["content-type"]).toContain("json");
    });

    it("Bad request should response with a 400 status code", async () => {
      const response = await request(app).get("/stations").query({}).send();
      expect(response.statusCode).toBe(400);
      expect(response.headers["content-type"]).toContain("json");
    });
  });
});
