import { useQuery } from "@tanstack/react-query";
import { User } from "../types/User";
import { getUser } from "../api/user";

export function useUser() {
  return useQuery<User>({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 1000 * 60,
  });
}
