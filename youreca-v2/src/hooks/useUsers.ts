import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";
import { getUsers } from "../api/user";
import { Search } from "../types/Search";

export function useUsers(keyword : string) {
  return useQuery<Search[]>({
    queryKey: ["user", keyword],
    queryFn: () => getUsers(keyword),
    staleTime: 1000 * 60,
  });
}
