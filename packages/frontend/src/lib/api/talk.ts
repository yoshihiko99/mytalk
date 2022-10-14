import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";

const SERVER_BASE_URL = process.env.SERVER_BASE_URL ?? "http://localhost:3000";

// eslint-disable-next-line @typescript-eslint/naming-convention
const headers = { "Content-Type": "application/json" };

const talkAPI = {
  getTalks: async (accessToken: string): AxiosPromise => {
    return (await axios
      .get(`${SERVER_BASE_URL}/talks`, {
        headers: {
          ...headers,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((error: AxiosError) => {
        return error.response;
      })) as AxiosResponse;
  },
};

export default talkAPI;
