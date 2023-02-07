import { request } from "./createRequest";

export const getCars = async (page: number) =>  {
    const cars = await request({
        url: `/car?page=${page+1}`,
        method: "GET",
    });
    return cars;
}

export const getOneCar = async (id: number) => {
    const { car } = await request({
        url: "/car",
        method: "GET",
        data: {
            id,
        },
    });
    return car;
}

export const addCar = async (body: object) => {
    await request({
        url: "/car",
        method: "POST",
        data: {
            body,
        },
    });
}