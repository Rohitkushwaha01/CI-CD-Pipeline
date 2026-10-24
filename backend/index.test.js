import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./index";

describe("API health check", () => {
    it("returns HTTP 200 and a healthy status", async () => {
        const response = await request(app).get("/api/health");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            status: "ok",
            service: "backend",
        });
    });
});
