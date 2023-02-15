import { FormData } from "../components/Order/Order";
import { request } from "./createRequest";

export const addRequest = async (obj: FormData) => {
  const { name, email, phone, carId } = obj;
  const req = await request({
    url: "/buyrequest",
    method: "POST",
    data: {
      name,
      email,
      phone,
      carId,
    },
  });
  return req;
};

export const getBuyRequests = async () => {
  const requests = await request({
    url: "/buyrequest",
    method: "GET",
  })
  
  return requests;
}
