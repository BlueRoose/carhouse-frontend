import { request } from "./createRequest";

export const addRequest = async (obj) => {
  const { name, email, subject, text } = obj;
  const req = await request({
    url: "/request/create-request",
    method: "POST",
    data: {
      name,
      email,
      subject,
      text,
    },
  });
  return req;
};

export const deleteRequest = async (id) => {
  const res = await request({
    url: "/request/delete-request",
    method: "DELETE",
    data: {
      id,
    },
  });

  return res;
};

export const getRequests = async () => {
  const requests = await request({
    url: "/request/get-requests",
    method: "GET",
  });

  return requests;
};
