import { ForeignResponse } from "@/pages/api/type";
import { useQuery } from "@tanstack/react-query";

const useForeign = () => {
  const { data, isFetching, refetch } = useQuery<ForeignResponse>({
    queryKey: ["Foreign"],
    queryFn: () =>
      fetch("api").then((res) => {
        return res.json();
      }),
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    data,
    isFetching,
    refetch,
  };
};

export default useForeign;
