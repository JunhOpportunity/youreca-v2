import NavigationBar from "@/src/components/common/NavigationBar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <NavigationBar/>
      {children}
    </div>
  );
}
