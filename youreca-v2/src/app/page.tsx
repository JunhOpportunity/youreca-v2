"use client";

import { useEffect } from "react";
import { useUser } from "../hooks/useUser";

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ searchId: string }>;
}) {
  // useEffect(() => {
  //   const fetchUser = async() => {
  //     const response = await fetch("/users/me");
  //     const data = response.json();

  //     console.log("데이터 : ", data);
  //   }

  //   fetchUser();

  // }, [])

  const { data, isLoading } = useUser();

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (data) {
    console.log("데이터 : ", data);
    return <div>Tanstack Query DATA TEST</div>;
  }

  return <div></div>;
}
