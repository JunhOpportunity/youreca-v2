import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";
import { getCurrentUser, getUser } from "../api/user";

export function useCurrentUser() {
  return useQuery<User>({
    queryKey: ["user", "me"],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60

  })
}