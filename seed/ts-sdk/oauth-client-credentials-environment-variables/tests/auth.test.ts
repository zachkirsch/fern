/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { SeedOauthClientCredentialsEnvironmentVariablesClient } from "../src/Client";

const client = new SeedOauthClientCredentialsEnvironmentVariablesClient({
    environment: process.env.TESTS_BASE_URL || "test",
    token: process.env.TESTS_AUTH || "test",
});

describe("Auth", () => {
    test("getTokenWithClientCredentials", async () => {
        const response = await client.auth.getTokenWithClientCredentials({
            clientId: "string",
            clientSecret: "string",
            audience: "https://api.example.com",
            grantType: "client_credentials",
            scope: "string",
        });
        expect(response).toEqual({ accessToken: "string", expiresIn: 1, refreshToken: "string" });
    });

    test("refreshToken", async () => {
        const response = await client.auth.refreshToken({
            clientId: "string",
            clientSecret: "string",
            refreshToken: "string",
            audience: "https://api.example.com",
            grantType: "refresh_token",
            scope: "string",
        });
        expect(response).toEqual({ accessToken: "string", expiresIn: 1, refreshToken: "string" });
    });
});