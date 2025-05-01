import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TaskList } from "@/components/task-list"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TasksPage() {
  // Mock data for tasks
  const allTasks = [
    {
      id: "1",
      title: "Update color scheme",
      description: "Apply new brand colors to all pages",
      assignee: "Alex Johnson",
      project: "Website Redesign",
      dueDate: "Nov 20, 2023",
      priority: "Medium",
      status: "To Do",
    },
    {
      id: "2",
      title: "Optimize images",
      description: "Compress and optimize all website images",
      assignee: "Sarah Miller",
      project: "Website Redesign",
      dueDate: "Nov 22, 2023",
      priority: "Low",
      status: "To Do",
    },
    {
      id: "3",
      title: "Redesign homepage",
      description: "Create new layout for homepage",
      assignee: "David Chen",
      project: "Website Redesign",
      dueDate: "Nov 18, 2023",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "4",
      title: "Implement responsive design",
      description: "Ensure website works on all devices",
      assignee: "Maria Garcia",
      project: "Website Redesign",
      dueDate: "Nov 25, 2023",
      priority: "High",
      status: "In Progress",
    },
    {
      id: "5",
      title: "Update navigation menu",
      description: "Implement new navigation structure",
      assignee: "Alex Johnson",
      project: "Website Redesign",
      dueDate: "Nov 15, 2023",
      priority: "Medium",
      status: "Review",
    },
    {
      id: "6",
      title: "Create wireframes",
      description: "Design wireframes for all main pages",
      assignee: "Sarah Miller",
      project: "Website Redesign",
      dueDate: "Nov 10, 2023",
      priority: "High",
      status: "Done",
    },
    {
      id: "7",
      title: "Stakeholder review",
      description: "Present initial designs to stakeholders",
      assignee: "David Chen",
      project: "Website Redesign",
      dueDate: "Nov 5, 2023",
      priority: "Medium",
      status: "Done",
    },
    {
      id: "8",
      title: "Content audit",
      description: "Review and organize existing content",
      assignee: "Maria Garcia",
      project: "Website Redesign",
      dueDate: "Nov 3, 2023",
      priority: "Low",
      status: "Done",
    },
    {
      id: "9",
      title: "API integration",
      description: "Connect app to backend services",
      assignee: "Alex Johnson",
      project: "Mobile App Development",
      dueDate: "Dec 5, 2023",
      priority: "High",
      status: "To Do",
    },
    {
      id: "10",
      title: "User testing",
      description: "Conduct usability tests with focus group",
      assignee: "Sarah Miller",
      project: "Mobile App Development",
      dueDate: "Dec 15, 2023",
      priority: "Medium",
      status: "To Do",
    },
  ]

  const myTasks = allTasks.filter((task) => task.assignee === "Alex Johnson")
  const todoTasks = allTasks.filter((task) => task.status === "To Do")
  const inProgressTasks = allTasks.filter((task) => task.status === "In Progress")
  const completedTasks = allTasks.filter((task) => task.status === "Done")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search tasks..." className="w-full pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="website">Website Redesign</SelectItem>
              <SelectItem value="mobile">Mobile App Development</SelectItem>
              <SelectItem value="marketing">Marketing Campaign</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="my-tasks">My Tasks</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <TaskList tasks={allTasks} />
        </TabsContent>
        <TabsContent value="my-tasks" className="mt-4">
          <TaskList tasks={myTasks} />
        </TabsContent>
        <TabsContent value="todo" className="mt-4">
          <TaskList tasks={todoTasks} />
        </TabsContent>
        <TabsContent value="in-progress" className="mt-4">
          <TaskList tasks={inProgressTasks} />
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <TaskList tasks={completedTasks} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
