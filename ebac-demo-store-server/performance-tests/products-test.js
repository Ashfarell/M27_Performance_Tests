import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "10s",
};

const token = "SEU_TOKEN_AQUI";

export default function () {

  const payload = JSON.stringify({
    query: `
      query {
        customers {
          firstName
          lastName
          email
        }
      }
    `
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };

  const res = http.post("http://localhost:3000/graphql", payload, params);

  check(res, {
    "status 200": (r) => r.status === 200,
  });

  sleep(1);
}