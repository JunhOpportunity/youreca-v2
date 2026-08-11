"use client"

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const fetchUser = async() => {
      const response = await fetch("/users/me");
      const data = response.json();

      console.log("데이터 : ", data);
    }

    fetchUser();

  }, [])

  return (
    <div>
      MSW TEST
    </div>
  );
}
