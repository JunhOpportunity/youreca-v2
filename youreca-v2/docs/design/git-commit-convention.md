# Git Commit Convention

# 브랜치

- main : 최종 통합
- develop : 개발 통합(feature 파생 및 통합)
- feature/ : 코드 구현(PR Merge 이후 삭제)

# 명령어

### 1. 브랜치 생성 (현재 브랜치 : develop)

```jsx
$ git checkout -b feature/___
```

### 2. 개발 후 커밋

> 유형($카테고리) : 내용
ex) feat($로그인) : 로그인 페이지 구현
> 
- feat : 기능 개발
- docs : 문서 작성
- style : 스타일 작성
- fix : 오류 수정
- chore : 기타

```jsx
$ git add .
$ git commit -m "feat"
$ git push -u origin feature/___
```

### 3. PR 작성 및 Merge

```jsx
## Summary

## Changes
- 

## Test

## Screenshot

## Review Notes
```

### 4. develop 브랜치 최신화 (현재 브랜치 : feature/___)

```jsx
$ git switch develop
$ git pull origin develop
```

### 5. feature 브랜치 삭제

```jsx
$ git branch -d feature/___
```