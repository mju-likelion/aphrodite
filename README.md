This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 시작 방법

First, run the development server:

```bash
yarn
yarn dev
```

## 개발 방법

0. 해당 repo를 클론 받는다.
1. (develop 브랜치가 아닐경우) `git checkout develop` 명령어를 입력하여 develop 브랜치로 이동한다.
2. `git checkout -b {feature|style|fix|refator.../본인이름/진행사항이름(ex.SignIn, SignUp, EmailConfirm...)}` 명령어를 입력하여 자기 이름 브랜치를 만든다.
3. 자신이 맡은 기능을 개발한다.
4. git에 본인 브랜치를 올리고 develop에 merge하는 PR을 생성한다.

## 커밋 메세지 규칙

- `feat:` => 기능 개발
- `fix:` => 기능 및 코드 수정
- `style:` => css 관련
- `refactor:` => 리팩토링
- `chore:` => 폴더 구조 변경

## HTTPS 설정 방법

https://www.notion.so/Web-200b750e161e4b858669dbc534404b32

## 환경 변수

1. 프로젝트 폴더에 .env 파일 생성
2. 다음 코드 입력

```bash
NEXT_PUBLIC_NANA_SITE=https://promotion.mju-likelion.com/
NEXT_PUBLIC_BASE_URL=https://api-apply.mju-likelion.com
```
