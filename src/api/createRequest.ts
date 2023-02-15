import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

type RequestType = {
  method: string;
  url: string;
  data?: any;
}

export const request = async ({ method, url, data }: RequestType) => {
  const options = {
    method,
    data,
    url,
    headers: {
      "Content-type": "multipart/form-data",
    },
  };



  try {
    const result = await axiosInstance(options);
    return result.data;
  } catch (error) {
    throw error;
  }
};
