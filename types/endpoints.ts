import type { Blog } from "./schema";

type EndpointSchema = Record<
  string,
  Record<
    string,
    {
      request: object;
      response: object;
    }
  >
>;
export type Endpoints = {
  "/": {
    GET: {
      request: null;
      response: { message: "pong" };
    };
    POST: {
      request: { message: "ping" };
      response: { message: "pong" };
    };
  };
  "/blogs": {
    GET: {
      request: null;
      response: Blog[];
    };
    POST: {
      request: Blog;
      response: Blog;
    };
  };
} & EndpointSchema;
