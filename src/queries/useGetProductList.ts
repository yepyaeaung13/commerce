import { getProductList } from "@/services/product.service";
import { GetProductList } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";

export const useGetProductListQuery = () => {
  return useQuery({
    queryKey: [GetProductList],
    queryFn: getProductList,
  });
};
