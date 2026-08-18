# 프로젝트 설계

# 1. 서비스 기능 목록

### a. 서비스 기능 정의

인증

- 로그인
- 회원가입
- 로그아웃

프로필

- 내 프로필 조회
- 프로필 수정
- 다른 사용자 프로필 조회

평판

- 평판 작성
- 평판 수정
- 평판 삭제
- 평판 조회

고객지원

- 문의하기
- FAQ

# 2. 페이지 구조

### a. 페이지 설계

```jsx
app
│
├── page.tsx                 // 플랫폼 소개 (Landing)
│
├── (auth)
│   ├── login
│   │   └── page.tsx
│   └── signup
│       └── page.tsx
│
├── home
│   └── page.tsx
│
├── users
│   └── [userId]
│       └── page.tsx         // 다른 사람 프로필
│
├── mypage
│   └── page.tsx             // 내 프로필
│
├── reviews
│   ├── page.tsx             // 평판 목록
│   ├── create
│   │   └── page.tsx         // 평판 작성
│   └── [reviewId]
│       └── page.tsx         // 평판 상세
│
├── support
│   └── page.tsx             // 고객센터
│
└── not-found.tsx
```

- app - 플랫폼 소개 페이지
- login - 로그인/회원가입 페이지
- home - 메인 페이지
- regist - 평판 등록 페이지
- 평판 작성 페이지
- review - 평판 조회 페이지
- feedback - 피드백 페이지
- mypage - 프로필 페이지
- 고객센터 페이지

### b. 컴포넌트 설계

# 3. 데이터 모델

### a. 데이터 설계

```jsx
// User
interface User {
	createdAt : Date;
	profileImg : string;
	email : string;
	id : string;
	job? : string;
	nickname : string;
}
```

```jsx
// Review
interface Review {
	id : string;
	targetIserId : string;
	writeUserId : string;
	nickname : string;
	content : string;
	createdAt : Date;
}
```