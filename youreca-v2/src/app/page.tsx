import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "프로필 생성",
    description: "나만의 프로필을 만들고\n나를 소개해보세요.",
  },
  {
    number: "02",
    title: "평판 요청",
    description: "함께했던 친구와 동료에게\n평판을 요청해보세요.",
  },
  {
    number: "03",
    title: "평판 작성",
    description: "나를 알고 있는 사람들이\n당신에 대한 평판을 작성합니다.",
  },
  {
    number: "04",
    title: "평판 확인",
    description: "여러 사람의 이야기를\n나만의 평판 페이지에서 확인해보세요.",
  },
];

const audiences = [
  {
    number: "01",
    title: "취업을 준비하고 있다면",
    description:
      "프로젝트와 활동을 함께했던 사람들의 평판을 받아보세요.",
  },
  {
    number: "02",
    title: "팀 프로젝트를 많이 한다면",
    description:
      "함께했던 사람들의 평가를 나만의 프로필에 기록해보세요.",
  },
  {
    number: "03",
    title: "나를 객관적으로 알고 싶다면",
    description:
      "주변 사람들이 바라보는 나의 모습을 확인해보세요.",
  },
];

const reviews = [
  {
    name: "홍길동",
    role: "Frontend Developer",
    content: "맡은 일을 끝까지 책임지고 해결하는 사람입니다.",
    initial: "홍",
  },
  {
    name: "김철수",
    role: "Backend Developer",
    content:
      "팀원들의 의견을 잘 듣고 문제가 생기면 적극적으로 해결하려고 합니다.",
    initial: "김",
  },
  {
    name: "이영희",
    role: "Designer",
    content: "같이 프로젝트를 진행하면서 항상 일정을 잘 지켜주었습니다.",
    initial: "이",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-zinc-950"
          >
            Youreca
          </Link>

          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
          >
            로그인
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50">
        <div className="mx-auto flex min-h-[680px] max-w-6xl items-center px-6 py-28">
          <div className="w-full">
            <p className="mb-7 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              YOURECA
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.15] tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-7xl">
              나를 잘 아는 사람들이 남기는
              <br />
              <span className="text-blue-600">나만의 평판</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
              함께 공부하고, 일하고, 활동했던 사람들이
              <br className="hidden sm:block" />
              당신에 대해 남긴 이야기를 한곳에서 확인해보세요.
            </p>

            <div className="mt-10">
              <Link
                href="/login"
                className="inline-flex items-center rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                나의 평판 시작하기
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* How it works */}
      <section className="border-b border-zinc-100">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              간단하게 시작해보세요
            </h2>

            <p className="mt-5 leading-8 text-zinc-500">
              나만의 평판 페이지를 만들고
              <br />
              함께했던 사람들의 이야기를 모아보세요.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="bg-white p-7 transition hover:bg-zinc-50"
              >
                <span className="text-sm font-semibold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-12 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* For you */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-600">
                FOR YOU
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                이런 분들에게 추천합니다
              </h2>
            </div>

            <p className="max-w-md leading-7 text-zinc-500">
              함께했던 사람들의 시선으로
              <br />
              나를 조금 더 객관적으로 알아보세요.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <article
                key={audience.number}
                className="group rounded-3xl border border-zinc-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-zinc-300">
                  {audience.number}
                </span>

                <h3 className="mt-16 text-xl font-bold">
                  {audience.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500">
                  {audience.description}
                </p>

                <div className="mt-8 text-blue-600 opacity-0 transition group-hover:opacity-100">
                  →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-400">
              REVIEW
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              다른 사람들이 바라본 나
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              나에게는 익숙한 모습이지만,
              <br />
              다른 사람에게는 특별하게 보일 수 있습니다.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold">
                    {review.initial}
                  </div>

                  <div>
                    <strong className="block text-sm font-semibold">
                      {review.name}
                    </strong>

                    <span className="mt-1 block text-xs text-zinc-500">
                      {review.role}
                    </span>
                  </div>
                </div>

                <p className="mt-10 text-lg font-medium leading-8 text-zinc-200">
                  “{review.content}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-200">
            YOURECA
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            당신을 잘 아는 사람들의 이야기를
            <br />
            한곳에 모아보세요.
          </h2>

          <p className="mt-6 text-blue-100">
            지금 나만의 평판 페이지를 만들어보세요.
          </p>

          <Link
            href="/login"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            나의 평판 시작하기
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row">
            <div>
              <strong className="text-lg font-bold text-white">
                Youreca
              </strong>

              <p className="mt-3 text-sm">
                나를 잘 아는 사람들이 남기는 나만의 평판
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <Link
                href="/login"
                className="transition hover:text-white"
              >
                로그인
              </Link>

              <Link
                href="/signup"
                className="transition hover:text-white"
              >
                회원가입
              </Link>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-800 pt-6 text-xs text-zinc-600">
            © 2026 Youreca. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}