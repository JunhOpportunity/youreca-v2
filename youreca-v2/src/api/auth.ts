type SignupRequest = {
  email: string;
  password: string;
};

export async function signup(data: SignupRequest) {
  const res = await fetch("/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("회원가입에 실패했습니다.");
  }

  return res.json();
}
