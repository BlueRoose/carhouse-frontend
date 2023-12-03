import { request } from "./createRequest";

export const addRequest = async (userId, carId, phone) => {
  const req = await request({
    url: "/buy-request/create-buy-request",
    method: "POST",
    data: {
      userId,
      phone,
      carId
    },
  });
  return req;
};

export const deleteRequest = async (id) => {
  const res = await request({
    url: "/buy-request/delete-buy-request",
    method: "DELETE",
    data: {
      id,
    },
  });

  return res;
};

export const getBuyRequests = async () => {
  const requests = await request({
    url: "/buy-request/get-buy-requests",
    method: "GET",
  });

  return requests;
};
