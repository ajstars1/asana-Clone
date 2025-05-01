import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TaskBoard } from "@/components/task-board"
import { TaskList } from "@/components/task-list"
import { CalendarIcon, FileIcon, MessageSquare, MoreHorizontal, Plus, Settings } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project data based on the ID
  const project = {
    id: params.id,
    name: "Website Redesign",
    description: "Redesign the company website with new branding and improved user experience",
    progress: 75,
    dueDate: "December 15, 2023",
    status: "In Progress",
    members: [
      { id: "1", name: "Alex Johnson", email: "alex@example.com", avatar: "/placeholder.svg" },
      { id: "2", name: "Sarah Miller", email: "sarah@example.com", avatar: "/placeholder.svg" },
      { id: "3", name: "David Chen", email: "david@example.com", avatar: "/placeholder.svg" },
      { id: "4", name: "Maria Garcia", email: "maria@example.com", avatar: "/placeholder.svg" },
    ],
  }

  // Mock data for tasks
  const tasks = {
    todo: [
      {
        id: "1",
        title: "Update color scheme",
        description: "Apply new brand colors to all pages",
        assignee: "Alex Johnson",
        dueDate: "Nov 20, 2023",
        priority: "Medium",
      },
      {
        id: "2",
        title: "Optimize images",
        description: "Compress and optimize all website images",
        assignee: "Sarah Miller",
        dueDate: "Nov 22, 2023",
        priority: "Low",
      },
    ],
    "in-progress": [
      {
        id: "3",
        title: "Redesign homepage",
        description: "Create new layout for homepage",
        assignee: "David Chen",
        dueDate: "Nov 18, 2023",
        priority: "High",
      },
      {
        id: "4",
        title: "Implement responsive design",
        description: "Ensure website works on all devices",
        assignee: "Maria Garcia",
        dueDate: "Nov 25, 2023",
        priority: "High",
      },
    ],
    review: [
      {
        id: "5",
        title: "Update navigation menu",
        description: "Implement new navigation structure",
        assignee: "Alex Johnson",
        dueDate: "Nov 15, 2023",
        priority: "Medium",
      },
    ],
    done: [
      {
        id: "6",
        title: "Create wireframes",
        description: "Design wireframes for all main pages",
        assignee: "Sarah Miller",
        dueDate: "Nov 10, 2023",
        priority: "High",
      },
      {
        id: "7",
        title: "Stakeholder review",
        description: "Present initial designs to stakeholders",
        assignee: "David Chen",
        dueDate: "Nov 5, 2023",
        priority: "Medium",
      },
      {
        id: "8",
        title: "Content audit",
        description: "Review and organize existing content",
        assignee: "Maria Garcia",
        dueDate: "Nov 3, 2023",
        priority: "Low",
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Duplicate Project</DropdownMenuItem>
              <DropdownMenuItem>Archive Project</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Delete Project</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{project.progress}%</span>
              <Badge>{project.status}</Badge>
            </div>
            <Progress value={project.progress} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Due Date</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{project.dueDate}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.values(tasks).flat().length}</div>
            <p className="text-xs text-muted-foreground">
              {tasks.done.length} completed, {Object.values(tasks).flat().length - tasks.done.length} remaining
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex -space-x-2">
              {project.members.map((member) => (
                <Avatar key={member.id} className="border-2 border-background">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
              <Button variant="outline" size="icon" className="rounded-full h-8 w-8 ml-1">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add team member</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="board">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="board">Board</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
          </TabsList>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
        <TabsContent value="board" className="mt-0">
          <TaskBoard tasks={tasks} />
        </TabsContent>
        <TabsContent value="list" className="mt-0">
          <TaskList tasks={Object.values(tasks).flat()} />
        </TabsContent>
        <TabsContent value="files" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Files</CardTitle>
              <CardDescription>Manage project files and attachments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-lg">
                <div className="flex flex-col items-center text-center p-4">
                  <FileIcon className="h-10 w-10 text-muted-foreground mb-2" />
                  <h3 className="font-medium">Drop files here or click to upload</h3>
                  <p className="text-sm text-muted-foreground">Share files with your team members</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="discussions" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Discussions</CardTitle>
              <CardDescription>Team conversations and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <div className="flex flex-col items-center text-center p-4">
                  <MessageSquare className="h-10 w-10 text-muted-foreground mb-2" />
                  <h3 className="font-medium">No discussions yet</h3>
                  <p className="text-sm text-muted-foreground">Start a conversation with your team</p>
                  <Button className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    New Discussion
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
