"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useHasMounted } from "@/hooks/use-has-mounted";

import { AppSidebar } from "./_components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const hasMounted = useHasMounted()

  if (!hasMounted) return null

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}