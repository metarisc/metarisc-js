import { Metarisc } from "../lib/index.js";
import { AuthMethod } from "../lib/client.js";

const metarisc = new Metarisc({});

console.log("Authentification :");

const authentication_result = await metarisc.authenticate(
  AuthMethod.CLIENT_CREDENTIALS,
  {
    client_id: "integration-platau-dev",
    client_secret: "WAmceX3RW9I6dNGOmtzpd7LWcGLjrYJL",
    scope: "openid profile email",
  }
);
console.log(authentication_result);
console.log(metarisc.client.getAccessToken());
console.log(metarisc.client.getRefreshToken());

// console.log("Refresh token :");
// const refresh_token_result = await metarisc.client.refreshToken();
