import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"

interface Task {
  id: string
  title: string
  description: string
  assignee: string
  project?: string
  dueDate: string
  priority: string
  status?: string
}

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const priorityColors = {
    Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Medium: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    High: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Urgent: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const statusColors = {
    "To Do": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Review: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Done: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[40px]">
                <Checkbox />
              </th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Task</th>
              {tasks[0]?.project && (
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Project</th>
              )}
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Assignee</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Due Date</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Priority</th>
              {tasks[0]?.status && (
                <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
              )}
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[40px]"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t hover:bg-muted/50">
                <td className="p-4 align-middle">
                  <Checkbox />
                </td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col">
                    <Link href={`/dashboard/tasks/${task.id}`} className="font-medium hover:underline">
                      {task.title}
                    </Link>
                    <span className="text-sm text-muted-foreground line-clamp-1">{task.description}</span>
                  </div>
                </td>
                {task.project && <td className="p-4 align-middle">{task.project}</td>}
                <td className="p-4 align-middle">{task.assignee}</td>
                <td className="p-4 align-middle">{task.dueDate}</td>
                <td className="p-4 align-middle">
                  <Badge variant="secondary" className={priorityColors[task.priority as keyof typeof priorityColors]}>
                    {task.priority}
                  </Badge>
                </td>
                {task.status && (
                  <td className="p-4 align-middle">
                    <Badge variant="secondary" className={statusColors[task.status as keyof typeof statusColors]}>
                      {task.status}
                    </Badge>
                  </td>
                )}
                <td className="p-4 align-middle">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Assign</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
