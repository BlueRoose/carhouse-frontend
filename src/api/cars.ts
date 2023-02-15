import { Car } from "../components/AddCar/AddCar";
import { request } from "./createRequest";

export const getCars = async (
  brand: string,
  type: string,
  model: string,
  year: string,
  page: number,
  sortType: string
) => {
  const cars = await request({
    url: `/car?page=${
      page + 1
    }&sorttype=${sortType}&brand=${brand}&type=${type}&model=${model}&year=${year}`,
    method: "GET",
  });
  return cars;
};

export const getOneCar = async (id: number) => {
  const { car } = await request({
    url: "/car",
    method: "GET",
    data: {
      id,
    },
  });
  return car;
};

export const createCar = async (body: Car) => {
  const {
    name,
    price,
    year,
    color,
    transmition,
    passenger,
    topSpeed,
    horsePower,
    time,
    rating,
    img,
    brandId,
    typeId,
  } = body;
  await request({
    url: "/car",
    method: "POST",
    data: {
      name,
      price,
      year,
      color,
      transmition,
      passenger,
      topSpeed,
      horsePower,
      time,
      rating,
      img,
      brandId,
      typeId,
    },
  });
};
