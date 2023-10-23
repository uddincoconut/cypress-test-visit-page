// This k6 test was made to fail randomly 50% of the times.
import http from "k6/http";
import { check, fail, sleep } from "k6";

export const options = {
  stages: [{ duration: "1s", target: 1 }],
};

let statusCode = Math.random() > 0.5 ? 200 : 502;
export default function () {
  const res = http.get("https://example.cypress.io/todo");
  check(res, {
    "Check if status code is 200": (r) => {
      console.log(statusCode, "Passing? ", 200 == statusCode);
      return r.status == statusCode;
    },
  });
}
