import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const request = async ({ method, url, data }) => {
  const token = localStorage.getItem("token");
  const options = {
    method,
    data,
    url,
    headers: {
      "Content-type": "multipart/form-data",
      "Authorization": `Bearer ${token || ''}`
    },
  };

  try {
    const result = await axiosInstance(options);
    return result.data;
  } catch (error) {
    throw error;
  }
};
