import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

function useFetch(url: string, key: string) {
  const { data, isLoading, error,refetch } = useQuery({
    queryKey: [`${key}`],
    queryFn: async () =>
      await axios.get(url).then((res: AxiosResponse) => res.data),
  });

  return { data, isLoading, error,refetch };
}

export default useFetch;