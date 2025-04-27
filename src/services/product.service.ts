import { GetProductById } from "@/utils/constant";
import apiClient from ".";
import { AxiosResponse } from "axios";

export async function getProductList() {
    const response: AxiosResponse = await apiClient.get(GetProductById);
    return response.data;
}