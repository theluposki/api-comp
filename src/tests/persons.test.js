const BaseUrl = "http://localhost:3002";

import fetch from "node-fetch";
/*
router.get("/persons", auth, personsGET);
*/
describe("List Persons GET /persons", () => {
  test(`
    list all users.

    the user must be authenticated to view this route.

    is expected to return a status code of 401.
    `, async () => {
    const result = await fetch(`${BaseUrl}/persons`);

    const received = result.status;
    const Expected = 401;

    expect(received).toBe(Expected);
  });

  test(`
    the message of this request is expected to be "authentication is required to access this route"
    `, async () => {
    const result = await fetch(`${BaseUrl}/persons`);

    const { messagem } = await result.json();

    const received = messagem;
    const Expected = "authentication is required to access this route";

    expect(received).toBe(Expected);
  });

  test(`
    Search all users.

    the user must be authenticated to view this route.
    `, async () => {
    const result = await fetch(`${BaseUrl}/persons`);
    const { error } = await result.json();

    const received = error;
    const Expected = "No token provided";

    expect(received).toBe(Expected);
  });

  test(`
  it is expected that when the authorization header is sent it contains the prefix ( Baerer + the TOKEN )
  `, async () => {
    const result = await fetch(`${BaseUrl}/persons`, {
      headers: {
        authorization: "Baerer ",
      },
    });

    const { error } = await result.json();

    const received = error;
    const Expected = "Token malformatted";

    expect(received).toBe(Expected);
  });

});
