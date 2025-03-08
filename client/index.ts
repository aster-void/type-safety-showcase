import type { Endpoints } from "../types/endpoints";

const API_ORIGIN = "localhost:3000";

export async function myFetch<
  Path extends keyof Endpoints,
  Method extends keyof Endpoints[Path] extends string ? keyof Endpoints[Path] : never,
>(method: Method, path: Path, body: Endpoints[Path][Method]["request"]) {
  const resp = await fetch(`${API_ORIGIN}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return (await resp.json()) as Endpoints[Path][Method]["response"];
}

const json = await myFetch("POST", "/", {
  message: "ping",
});
console.log("client got", json satisfies { message: "pong" });
