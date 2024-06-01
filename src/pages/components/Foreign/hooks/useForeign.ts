import { ForeignResponse } from "@/pages/api/type";
import { useQuery } from "@tanstack/react-query";
import { isWeekend } from "date-fns";

const useForeign = () => {
    const {data, isFetching, refetch} = useQuery<ForeignResponse>({
        queryKey: ["Foreign"],
        queryFn: () =>
            fetch("api").then((res) => {
                return res.json();
            }),
        staleTime: Infinity,
        gcTime: Infinity,
        enabled: !isWeekend(new Date()),
    });

    return {
        data,
        isFetching,
        refetch
    }
}

export default useForeign;