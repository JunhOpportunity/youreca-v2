import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/users"
          className="text-lg font-bold tracking-tight text-zinc-950"
        >
          YOURECA
        </Link>

        <div className="flex items-center gap-7">
          <Link
            href="/users"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            검색
          </Link>

          <Link
            href="/profile"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            내 프로필
          </Link>

          <Link
            href="/cs"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
          >
            고객센터
          </Link>

          <div className="ml-2 h-5 w-px bg-zinc-200" />

          <Link
            href="/profile"
            className="text-sm font-semibold text-zinc-900 transition-colors hover:text-blue-600"
          >
            내 계정
          </Link>
        </div>
      </div>
    </nav>
  );
}