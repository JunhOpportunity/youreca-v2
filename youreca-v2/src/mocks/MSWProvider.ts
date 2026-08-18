"use client";

import { useEffect, useState } from "react";

export default function MSWProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (process.env.NODE_ENV !== "development") {
        setReady(true);
        return;
      }

      const { worker } = await import("./browser");

      await worker.start();

      setReady(true);
    };

    init();
  }, []);

  if (!ready) {
    return null;
  }

  return children;
}