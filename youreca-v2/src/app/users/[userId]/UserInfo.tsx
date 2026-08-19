import { useUser } from "@/src/hooks/useUser"

export default function UserInfo(userId : string) {

  const {data} = useUser(userId);
  
  return (<div>

  </div>)

}