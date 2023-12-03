import { request } from "./createRequest";

export const getCars = async () => {
  const cars = await request({
    url: "/car/get-cars",
    method: "GET",
  });
  return cars;
};

export const getFavourites = async (userId) => {
  const favouritedCars = await request({
    url: `/car/get-favourites?userId=${userId}`,
    method: "GET",
  });
  return favouritedCars;
};

export const getOneCar = async (id) => {
  const { car } = await request({
    url: `/car/get-car?id=${id}`,
    method: "GET",
  });
  return car;
};

export const addToFavourites = async (userId, carId) => {
  const favouritedCars = await request({
    url: `/car/add-to-favourites`,
    method: "POST",
    data: {
      userId,
      carId,
    }
  });
  return favouritedCars;
};

export const removeFromFavourites = async (userId, carId) => {
  const favouritedCars = await request({
    url: `/car/remove-from-favourites`,
    method: "POST",
    data: {
      userId,
      carId,
    }
  });
  return favouritedCars;
};

export const createCar = async (body) => {
  const {
    name,
    year,
    price,
    color,
    transmission,
    passenger,
    topSpeed,
    horsePower,
    rating,
    time,
    imgs,
    brandId,
    typeId,
  } = body;
  await request({
    url: "/car/create-car",
    method: "POST",
    data: {
      name,
      price,
      year,
      color,
      transmission,
      passenger,
      topSpeed,
      horsePower,
      time,
      rating,
      imgs,
      brandId,
      typeId,
    },
  });
};

export const deleteCar = async (carId) => {
  const car = await request({
    url: "/car/delete-car",
    method: "DELETE",
    data: {
      carId,
    },
  });

  return car;
};
