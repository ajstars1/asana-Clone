"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface Task {
  id: string
  title: string
  description: string
  assignee: string
  dueDate: string
  priority: string
}

interface TaskBoardProps {
  tasks: {
    todo: Task[]
    "in-progress": Task[]
    review: Task[]
    done: Task[]
  }
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  const [taskState, setTaskState] = useState(tasks)

  // In a real app, you would implement drag and drop functionality here

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            To Do
            <Badge variant="outline" className="ml-2">
              {taskState.todo.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-6 pt-2">
          <div className="space-y-4">
            {taskState.todo.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            In Progress
            <Badge variant="outline" className="ml-2">
              {taskState["in-progress"].length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-6 pt-2">
          <div className="space-y-4">
            {taskState["in-progress"].map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            Review
            <Badge variant="outline" className="ml-2">
              {taskState.review.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-6 pt-2">
          <div className="space-y-4">
            {taskState.review.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            Done
            <Badge variant="outline" className="ml-2">
              {taskState.done.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-6 pt-2">
          <div className="space-y-4">
            {taskState.done.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function TaskCard({ task }: { task: Task }) {
  const priorityColors = {
    Low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    Medium: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    High: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  }

  return (
    <div className="rounded-md border bg-card text-card-foreground shadow-sm">
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <Link href={`/dashboard/tasks/${task.id}`} className="font-medium hover:underline">
            {task.title}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Move</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg" alt={task.assignee} />
              <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{task.assignee}</span>
          </div>
          <Badge
            variant="secondary"
            className={`text-xs ${priorityColors[task.priority as keyof typeof priorityColors]}`}
          >
            {task.priority}
          </Badge>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarIcon className="mr-1 h-3 w-3" />
          {task.dueDate}
        </div>
      </div>
    </div>
  )
}
