import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data for demonstration
  const recentProjects = [
    {
      id: "1",
      name: "Website Redesign",
      description: "Redesign the company website with new branding",
      progress: 75,
      dueDate: "2023-12-15",
      members: 4,
      tasks: { total: 24, completed: 18 },
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Develop a new mobile app for iOS and Android",
      progress: 40,
      dueDate: "2024-02-28",
      members: 6,
      tasks: { total: 56, completed: 22 },
    },
    {
      id: "3",
      name: "Marketing Campaign",
      description: "Q4 marketing campaign for product launch",
      progress: 20,
      dueDate: "2023-11-30",
      members: 3,
      tasks: { total: 18, completed: 4 },
    },
  ]

  // Mock data for tasks due soon
  const tasksDueSoon = [
    { id: "1", name: "Finalize homepage design", project: "Website Redesign", dueDate: "Tomorrow" },
    { id: "2", name: "Review API documentation", project: "Mobile App Development", dueDate: "In 2 days" },
    { id: "3", name: "Create social media assets", project: "Marketing Campaign", dueDate: "In 3 days" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Link href="/dashboard/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Projects</CardTitle>
            <CardDescription>Active projects you're working on</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">7</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Your assigned tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">12 completed, 11 in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Tasks due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Within the next 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Recent Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Tasks Due Soon</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {tasksDueSoon.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4">
                  <div>
                    <p className="font-medium">{task.name}</p>
                    <p className="text-sm text-muted-foreground">{task.project}</p>
                  </div>
                  <div className="text-sm font-medium text-orange-500">{task.dueDate}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
