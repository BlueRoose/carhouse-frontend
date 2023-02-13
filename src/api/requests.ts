import { FormData } from "../pages/Contact/Contact";
import { request } from "./createRequest";

export const addRequest = async (obj: FormData) => {
  const { name, email, subject, text } = obj;
  await request({
    url: "/request",
    method: "POST",
    data: {
      name,
      email,
      subject,
      text,
    },
  });
};

export const getRequests = async () => {
  const requests = await request({
    url: "/request",
    method: "GET",
  });

  return requests;
};