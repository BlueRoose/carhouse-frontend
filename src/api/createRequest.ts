import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

type RequestType = {
  method: string;
  url: string;
  data?: object;
}

export const request = async ({ method, url, data }: RequestType) => {
  const options = {
    method,
    data,
    url,
  };

  try {
    const result = await axiosInstance(options);
    return result.data;
  } catch (error) {
    throw error;
  }
};
