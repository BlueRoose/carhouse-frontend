import { request } from "./createRequest";

export const checkUser = async (password: string) => {
  const user = await request({
    url: `/user/auth?password=${password}`,
    method: "GET",
  });

  return user;
};
