import { request } from "./createRequest";

export const getTypes = async () => {
  const types = await request({
    url: "/type",
    method: "GET",
  });

  return types;
};

export const addType = async (name: string) => {
  await request({
    url: "/type",
    method: "POST",
    data: {
      name,
    },
  });
};
