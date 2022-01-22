This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 시작 방법

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 개발 방법

0. 해당 repo를 클론 받는다.
1. (develop 브랜치가 아닐경우) `git checkout develop` 명령어를 입력하여 develop 브랜치로 이동한다.
2. `git checkout -b {feature|style|fix|refator.../본인이름/진행사항이름(ex.SignIn, SignUp, EmailConfirm...)}` 명령어를 입력하여 자기 이름 브랜치를 만든다.
3. 자신이 맡은 기능을 개발한다.
4. git에 본인 브랜치를 올리고 develop에 merge하는 PR을 생성한다.

## 커밋 메세지 규칙

![image](https://user-images.githubusercontent.com/57565933/149538692-1f687e6a-29de-4944-a54c-caad83ccc293.png)

#####

여기서 feat: , fix: , style: , refactor: , chore: 를 쓰시면됩니다.

## PR 이후

- 터미널에서 `git checkout develop` 명령어를 이용하여 develop 브랜치로 이동한다
- `git pull` 명령어를 이용하여 develop의 최신 상태를 가져온다.
- 자신의 브랜치를 만들고 거기서 개발한다.
