import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constant/Key";
import { customAxiosGet } from "../axios/customAxiosRequest";

const useTemplate = () => {
  const useGetAllTemplatesQuery = () => {
    return useQuery({
      queryFn: () => customAxiosGet("/allTemplate"),
      queryKey: [QUERY_KEY.TEMPLATE],
    });
  };
  return { useGetAllTemplatesQuery };
};

export default useTemplate;
