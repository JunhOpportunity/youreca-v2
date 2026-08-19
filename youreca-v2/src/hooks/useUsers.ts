import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";
import { getUsers } from "../api/user";

export function useUser(keyword : string) {
  return useQuery<User>({
    queryKey: ["user", keyword],
    queryFn: () => getUsers(keyword),
    staleTime: 1000 * 60,
  });
}
