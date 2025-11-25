import axiosModule from "axios";

export const axios = axiosModule.create({
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  headers: {
    "Content-Type": "application/json",
  },
});
