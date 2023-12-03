import { request } from "./createRequest";

export const getTypes = async () => {
  const types = await request({
    url: "/type/get-types",
    method: "GET",
  });

  return types;
};

export const addType = async (name) => {
  const type = await request({
    url: "/type/create-type",
    method: "POST",
    data: {
      name,
    },
  });

  return type;
};

export const updateType = async (typeId, name) => {
  const type = await request({
    url: "/type/update-type",
    method: "PATCH",
    data: {
      typeId,
      name
    },
  });

  return type;
};

export const deleteType = async (typeId) => {
  const type = await request({
    url: "/type/delete-type",
    method: "DELETE",
    data: {
      typeId,
    },
  });

  return type;
};
