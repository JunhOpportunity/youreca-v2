"use client"

export default function SignupCard() {

  return (
    <div>
      <form>
        <input type="email" placeholder="이메일"/>
        <input type="password" placeholder="비밀번호"/>
        <input type="password" placeholder="비밀번호 확인"/>
        <button>회원가입</button>
      </form>
    </div>
  )
}