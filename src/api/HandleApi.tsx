import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

const request = async (endpoint: string, method = "GET", body: any = null, headers = {}): Promise<any> => {
  const config: AxiosRequestConfig = {
    method,
    url: `${BASE_URL}${endpoint}`,
    headers: {
      "Content-Type": body instanceof FormData ? "multipart/form-data" : "application/json",
      ...headers,
    },
    withCredentials: true,
  };

  if (body) {
    config.data = body;
    console.log(body);
  }

  console.log("Request Config:", config);

  try {
    const response = await axios(config);
    console.log("Response Data:", response.data);

    return response.data;
  } catch (error) {
    console.error(`Error during ${method} request to ${endpoint}:`, error);
    throw error;
  }
};

export const get = (endpoint: string, headers = {}): Promise<any> =>
  request(endpoint, "GET", null, headers);

export const post = (endpoint: string, body: any, headers = {}): Promise<any> =>
  request(endpoint, "POST", body, headers);

export const put = (endpoint: string, body: any, headers = {}): Promise<any> =>
  request(endpoint, "PUT", body, headers);

export const del = (endpoint: string, headers = {}): Promise<any> =>
  request(endpoint, "DELETE", null, headers);
