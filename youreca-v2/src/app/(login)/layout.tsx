import AuthNavbar from "@/src/components/AuthNavigationBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <AuthNavbar />
      {children}
    </div>
  );
}
