import { Character } from "@/types/Character";
import { HouseIceAndFire } from "@/types/Houses";
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://anapioficeandfire.com/api",
  timeout: 5000, // Timeout if necessary
});

const fetchData = async <T>(url: string, options: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  try {
    const response = await axiosInstance(url, options);
    return response;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

export const fetchHouses = async (page?: number) => {
  const response = await fetchData<HouseIceAndFire[]>("houses", {
    method: "GET",
    params: {
      page: page || 1,
      pageSize: 10,
    },
  });
  return response.data;
};

export const fetchSwordMember = async (url: string) => {
  const response = await fetchData<Character>(url, {
    method: "GET",
  });
  return response.data;
}
