import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";
import { getUser } from "../api/user";

export function useUser(userId : string) {
  return useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
    staleTime: 1000 * 60,
  });
}
