import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";

const SERVER_BASE_URL =
  process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? "http://localhost:3000";

// eslint-disable-next-line @typescript-eslint/naming-convention
const headers = { "Content-Type": "application/json" };

const userAPI = {
  login: async (email: string, password: string): AxiosPromise => {
    return (await axios
      .post(`${SERVER_BASE_URL}/auth/login`, { email, password }, { headers })
      .catch((error: AxiosError) => {
        return error.response;
      })) as AxiosResponse;
  },

  register: async (
    displayName: string,
    email: string,
    password: string
  ): AxiosPromise => {
    return (await axios
      .post(
        `${SERVER_BASE_URL}/auth/register`,
        { displayName, email, password },
        { headers }
      )
      .catch((error: AxiosError) => {
        return error.response;
      })) as AxiosResponse;
  },

  me: async (accessToken: string): AxiosPromise => {
    return (await axios
      .get(`${SERVER_BASE_URL}/auth`, {
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

  refresh: async (refreshToken: string): AxiosPromise => {
    return (await axios
      .put(`${SERVER_BASE_URL}/auth/access-token`, {
        headers: {
          ...headers,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: `Bearer ${refreshToken}`,
        },
      })
      .catch((error: AxiosError) => {
        return error.response;
      })) as AxiosResponse;
  },

  logout: async (refreshToken: string): AxiosPromise => {
    return (await axios
      .post(`${SERVER_BASE_URL}/auth/logout`, {
        headers: {
          ...headers,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: `Bearer ${refreshToken}`,
        },
      })
      .catch((error: AxiosError) => {
        return error.response;
      })) as AxiosResponse;
  },
};

export default userAPI;
