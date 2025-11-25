import axiosModule from "axios";

export const axios = axiosModule.create({
  baseURL: "https://recruit.paysbypays.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
