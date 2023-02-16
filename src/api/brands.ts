import { request } from "./createRequest";

export const getBrands = async () => {
  const brands = await request({
    url: "/brand",
    method: "GET",
  });

  return brands;
};

export const addBrand = async (name: string) => {
  await request({
    url: "/brand",
    method: "POST",
    data: {
      name,
    },
  });
};
