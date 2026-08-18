# MSW

# 1. MSW 설치

```jsx
$ npm install -D msw
```

# 2. MSW에서 제공해주는 CLI 도구인 mockServiceWorker.js 파일을 ./public 경로에 생성

```jsx
$ npx msw init public/ --save
```

# 3. users.ts - 데이터 생성

```jsx
import { User } from "@/src/types/User";

export const users: User[] = [
  {
    createdAt: "2026-08-11T17:00:00Z",
    profileImg: "https://example.com/profile.png",
    email: "twinjyjh5@gmail.com",
    id: "1",
    job: "개발자",
    nickname: "JunhOpportunity",
  },
]
```

# 4. handler.ts - 핸들러 작성

```jsx
import { http, HttpResponse } from "msw";
import { users } from "./data/users";

export const handlers = [
  http.get("/users/me", () => {
    return HttpResponse.json(users[0]);
  }),
];
```

# 5. browser.ts - Browser Worker 작성

```jsx
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'
 
export const worker = setupWorker(...handlers)
```

# 6. Provider 작성 및 적용

```jsx
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
```

```jsx
// layout.tsx

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWProvider>
          <Providers>{children}</Providers>
        </MSWProvider>
      </body>
    </html>
  );
}
```

# 7. 모킹 테스트

```jsx
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
```