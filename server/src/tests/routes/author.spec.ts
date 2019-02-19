process.env.NODE_ENV = "testing";

import { server } from "../../app";
import request = require("supertest");

describe("Api Author", function(): void {
  it("should be able to create user", async (): Promise<any> => {
    let res = await request(server)
      .post("/api/author")
      .send({
        name: "Someone",
        description: "..."
      })
      .set("content-type", "application/json");

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual("Someone");
  });

  it("should be able to get users", async (): Promise<any> => {
    let res = await request(server).get("/api/author");

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(1);
  });
});
