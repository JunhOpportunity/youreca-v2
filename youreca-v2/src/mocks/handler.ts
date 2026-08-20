import { http, HttpResponse } from "msw";
import { users } from "./data/users";

export const handlers = [
  http.get("/users/me", () => {
    return HttpResponse.json(users[0]);
  }),
  http.get("/users/1", () => {
    return HttpResponse.json(users[0])
  }),
];
