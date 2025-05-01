"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CommentList } from "@/components/comment-list"
import { FileList } from "@/components/file-list"
import { toast } from "@/components/ui/use-toast"
import { Plus } from "lucide-react"

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // In a real app, you would fetch the task data based on the ID
  const task = {
    id: params.id,
    title: "Redesign homepage",
    description:
      "Create new layout for homepage based on the approved wireframes. Focus on improving user experience and conversion rates.",
    project: "Website Redesign",
    assignee: "David Chen",
    dueDate: "2023-11-18",
    priority: "High",
    status: "In Progress",
    createdBy: "Alex Johnson",
    createdAt: "2023-11-01",
  }

  // Mock data for comments
  const comments = [
    {
      id: "1",
      user: { name: "Alex Johnson", avatar: "/placeholder.svg" },
      content: "Let's make sure we follow the brand guidelines for this redesign.",
      timestamp: "2 days ago",
    },
    {
      id: "2",
      user: { name: "Sarah Miller", avatar: "/placeholder.svg" },
      content: "I've uploaded some reference designs that might be helpful.",
      timestamp: "1 day ago",
    },
    {
      id: "3",
      user: { name: "David Chen", avatar: "/placeholder.svg" },
      content: "I'll have the first draft ready by tomorrow.",
      timestamp: "5 hours ago",
    },
  ]

  // Mock data for files
  const files = [
    { id: "1", name: "homepage-wireframe.pdf", size: "2.4 MB", uploadedBy: "Sarah Miller", uploadedAt: "Nov 5, 2023" },
    { id: "2", name: "brand-guidelines.pdf", size: "3.8 MB", uploadedBy: "Alex Johnson", uploadedAt: "Nov 2, 2023" },
    { id: "3", name: "reference-designs.zip", size: "8.2 MB", uploadedBy: "Sarah Miller", uploadedAt: "Nov 6, 2023" },
  ]

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Task updated",
        description: "Your task has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your task could not be updated. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        Back to Tasks
      </Button>

      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Task Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" defaultValue={task.title} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" defaultValue={task.description} className="min-h-[100px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project">Project</Label>
                  <Select defaultValue={task.project}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Website Redesign">Website Redesign</SelectItem>
                      <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                      <SelectItem value="Marketing Campaign">Marketing Campaign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignee">Assignee</Label>
                  <Select defaultValue={task.assignee}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alex Johnson">Alex Johnson</SelectItem>
                      <SelectItem value="Sarah Miller">Sarah Miller</SelectItem>
                      <SelectItem value="David Chen">David Chen</SelectItem>
                      <SelectItem value="Maria Garcia">Maria Garcia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="due-date">Due Date</Label>
                  <DatePicker />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select defaultValue={task.priority}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue={task.status}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="To Do">To Do</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Review">Review</SelectItem>
                      <SelectItem value="Done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <p>
                  Created by {task.createdBy} on {task.createdAt}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </form>

        <Tabs defaultValue="comments">
          <TabsList>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="subtasks">Subtasks</TabsTrigger>
          </TabsList>
          <TabsContent value="comments" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <CommentList comments={comments} />
                <div className="mt-4 flex gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="@user" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea placeholder="Add a comment..." className="mb-2" />
                    <Button>Post Comment</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="files" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Files</CardTitle>
              </CardHeader>
              <CardContent>
                <FileList files={files} />
                <div className="mt-4">
                  <Button variant="outline">Upload File</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subtasks" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Subtasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-40">
                  <div className="flex flex-col items-center text-center p-4">
                    <h3 className="font-medium">No subtasks yet</h3>
                    <p className="text-sm text-muted-foreground">Break down this task into smaller steps</p>
                    <Button className="mt-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Subtask
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
