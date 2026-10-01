import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold text-gray-900"
        >
          YOURECA
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/users"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Search
          </Link>

          <Link
            href="/profile"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Profile
          </Link>

          <Link
            href="/cs"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Client Service
          </Link>
        </div>
      </div>
    </nav>
  );
}
