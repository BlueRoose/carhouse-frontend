import { request } from "./createRequest";

export const getBrands = async () => {
  const brands = await request({
    url: "/brand/get-brands",
    method: "GET",
  });

  return brands;
};

export const addBrand = async (name) => {
  const brand = await request({
    url: "/brand/create-brand",
    method: "POST",
    data: {
      name,
    },
  });

  return brand;
};

export const updateBrand = async (brandId, name) => {
  const brand = await request({
    url: "/brand/update-brand",
    method: "PATCH",
    data: {
      brandId,
      name
    },
  });

  return brand;
};

export const deleteBrand = async (brandId) => {
  const brand = await request({
    url: "/brand/delete-brand",
    method: "DELETE",
    data: {
      brandId,
    },
  });

  return brand;
};
