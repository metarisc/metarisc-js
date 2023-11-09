import { AuthMethod } from "../lib/client.js";
import { Metarisc } from "../lib/index.js";

const metarisc = new Metarisc({
  metarisc_url: "https://api.metarisc.fr/",
});

const authenticationResponse = await metarisc.authenticate(AuthMethod.CLIENT_CREDENTIALS, {
  client_id: "integration-platau-dev",
  client_secret: "XLZul3JVnTYQO0zSWUp32NFVcAAo0Rgs",
  scope: "openid profile email",
});
console.log(authenticationResponse);

let result = await metarisc.utilisateurs.getUtilisateursMoi();

console.log("============================= Résultat : ===============================");
console.log(result.data);

result = await metarisc.organisations.getOrganisation(
  "db0e189b-fa4e-4dd1-a424-ac3d7026cbaa"
);

console.log("============================= Résultat : ===============================");
console.log(result.data);
