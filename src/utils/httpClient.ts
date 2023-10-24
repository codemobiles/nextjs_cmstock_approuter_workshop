// interface NextRequestInit extends RequestInit {
//   baseURL?: string;
// }

// const httpClient = (
//   input: RequestInfo | URL,
//   init?: NextRequestInit | undefined
// ) => {
//   const baseURL = init?.baseURL ?? process.env.NEXT_PUBLIC_BASE_URL_API;
//   return fetch(`${baseURL}${input}`, {
//     method: init?.method ?? "GET",
//     headers: init?.headers ?? {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     ...init,
//   });
// };

// export default httpClient;

import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_API,
});

export default httpClient;
