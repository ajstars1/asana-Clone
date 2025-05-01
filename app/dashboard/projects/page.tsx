import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/project-card"
import { Plus, Search } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProjectsPage() {
  // Mock data for demonstration
  const projects = [
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
    {
      id: "4",
      name: "Product Roadmap",
      description: "Define product roadmap for next year",
      progress: 60,
      dueDate: "2023-12-31",
      members: 5,
      tasks: { total: 12, completed: 7 },
    },
    {
      id: "5",
      name: "Customer Research",
      description: "Conduct user interviews and analyze feedback",
      progress: 90,
      dueDate: "2023-11-15",
      members: 2,
      tasks: { total: 15, completed: 13 },
    },
    {
      id: "6",
      name: "Infrastructure Upgrade",
      description: "Upgrade server infrastructure and cloud services",
      progress: 30,
      dueDate: "2024-01-31",
      members: 3,
      tasks: { total: 20, completed: 6 },
    },
    {
      id: "7",
      name: "Annual Report",
      description: "Prepare annual report for stakeholders",
      progress: 10,
      dueDate: "2024-03-15",
      members: 4,
      tasks: { total: 22, completed: 2 },
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
        <Link href="/dashboard/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search projects..." className="w-full pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="deadline">Deadline</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
