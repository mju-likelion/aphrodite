import customAxios from "@lib/Axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

// 여기서 이메일 인증 api 호출
function EmailConfirm() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (!token) return;

    async function emailVerify() {
      try {
        const response = await customAxios.post(
          `/api/auth/email-verify/${token}`,
        );
        const { email } = response.data.data;
        router.push(
          {
            pathname: "/signup",
            query: { email },
          },
          "/signup", // '/signup' 으로 보내고 token 숨기기
        );
      } catch (e) {
        alert("에러가 발생했습니다 다시 인증 메일을 요청해주세요");
        router.push("/");
      }
    }
    emailVerify();
  }, [token]);

  return <div>이메일 인증중...</div>;
}

export default EmailConfirm;
