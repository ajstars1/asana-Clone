"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { CalendarDays, CheckSquare, FolderKanban, LayoutDashboard, Settings, Users } from "lucide-react"

export default function DashboardSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Projects",
      icon: FolderKanban,
      href: "/dashboard/projects",
      active: pathname.startsWith("/dashboard/projects"),
    },
    {
      label: "Tasks",
      icon: CheckSquare,
      href: "/dashboard/tasks",
      active: pathname.startsWith("/dashboard/tasks"),
    },
    {
      label: "Calendar",
      icon: CalendarDays,
      href: "/dashboard/calendar",
      active: pathname.startsWith("/dashboard/calendar"),
    },
    {
      label: "Team",
      icon: Users,
      href: "/dashboard/team",
      active: pathname.startsWith("/dashboard/team"),
    },
  ]

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <h2 className="mb-2 px-4 text-lg font-semibold">Menu</h2>
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.active ? "secondary" : "ghost"}
                className={cn("w-full justify-start", route.active && "bg-muted")}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/dashboard/settings">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </div>
    </div>
  )
}
