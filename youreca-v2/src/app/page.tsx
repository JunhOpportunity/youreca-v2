import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <Link href="/">Youreca</Link>

          <Link href="/login">
            로그인
          </Link>
        </nav>
      </header>

      <section>
        <div>
          <p>Youreca</p>

          <h1>
            나를 잘 아는 사람들이 남기는
            <br />
            나만의 평판
          </h1>

          <p>
            함께 공부하고, 일하고, 활동했던 사람들이
            <br />
            당신에 대해 남긴 이야기를 한곳에서 확인해보세요.
          </p>

          <Link href="/login">
            나의 평판 시작하기
          </Link>
        </div>
      </section>

      <section>
        <div>
          <p>ABOUT YOURECA</p>

          <h2>
            Youreca는 어떤 서비스인가요?
          </h2>

          <p>
            Youreca는 주변 사람들이 바라본 나의 모습을
            기록하는 평판 서비스입니다.
          </p>

          <p>
            친구, 동료, 팀원 등 나와 함께했던 사람들에게
            평판을 받고 나만의 프로필에 모아보세요.
          </p>
        </div>

        <div>
          <div>
            <span>내가 나를 설명하는 프로필</span>
          </div>

          <div>+</div>

          <div>
            <span>다른 사람이 바라본 나</span>
          </div>

          <div>=</div>

          <strong>Youreca</strong>
        </div>
      </section>

      <section>
        <div>
          <p>HOW IT WORKS</p>

          <h2>
            간단하게 시작해보세요
          </h2>

          <p>
            나만의 평판 페이지를 만들고
            함께했던 사람들의 이야기를 모아보세요.
          </p>
        </div>

        <div>
          <article>
            <span>01</span>

            <h3>프로필 생성</h3>

            <p>
              나만의 프로필을 만들고
              나를 소개해보세요.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>평판 요청</h3>

            <p>
              함께했던 친구와 동료에게
              평판을 요청해보세요.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>평판 작성</h3>

            <p>
              나를 알고 있는 사람들이
              당신에 대한 평판을 작성합니다.
            </p>
          </article>

          <article>
            <span>04</span>

            <h3>평판 확인</h3>

            <p>
              여러 사람의 이야기를
              나만의 평판 페이지에서 확인해보세요.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div>
          <p>FOR YOU</p>

          <h2>
            이런 분들에게 추천합니다
          </h2>
        </div>

        <div>
          <article>
            <h3>취업을 준비하고 있다면</h3>

            <p>
              프로젝트와 활동을 함께했던 사람들의
              평판을 받아보세요.
            </p>
          </article>

          <article>
            <h3>팀 프로젝트를 많이 한다면</h3>

            <p>
              함께했던 사람들의 평가를
              나만의 프로필에 기록해보세요.
            </p>
          </article>

          <article>
            <h3>나를 객관적으로 알고 싶다면</h3>

            <p>
              주변 사람들이 바라보는
              나의 모습을 확인해보세요.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div>
          <p>REVIEW</p>

          <h2>
            다른 사람들이 바라본 나
          </h2>

          <p>
            나에게는 익숙한 모습이지만,
            다른 사람에게는 특별하게 보일 수 있습니다.
          </p>
        </div>

        <div>
          <article>
            <div>
              <div>
                <strong>홍길동</strong>
                <span>Frontend Developer</span>
              </div>
            </div>

            <p>
              "맡은 일을 끝까지 책임지고
              해결하는 사람입니다."
            </p>
          </article>

          <article>
            <div>
              <div>
                <strong>김철수</strong>
                <span>Backend Developer</span>
              </div>
            </div>

            <p>
              "팀원들의 의견을 잘 듣고
              문제가 생기면 적극적으로 해결하려고 합니다."
            </p>
          </article>

          <article>
            <div>
              <div>
                <strong>이영희</strong>
                <span>Designer</span>
              </div>
            </div>

            <p>
              "같이 프로젝트를 진행하면서
              항상 일정을 잘 지켜주었습니다."
            </p>
          </article>
        </div>
      </section>

      <section>
        <div>
          <p>YOURECA</p>

          <h2>
            당신을 잘 아는 사람들의 이야기를
            <br />
            한곳에 모아보세요.
          </h2>

          <p>
            지금 나만의 평판 페이지를 만들어보세요.
          </p>

          <Link href="/login">
            나의 평판 시작하기
          </Link>
        </div>
      </section>

      <footer>
        <div>
          <strong>Youreca</strong>

          <p>
            나를 잘 아는 사람들이 남기는 나만의 평판
          </p>
        </div>

        <div>
          <Link href="/login">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </div>

        <p>
          © 2026 Youreca. All rights reserved.
        </p>
      </footer>
    </main>
  );
}