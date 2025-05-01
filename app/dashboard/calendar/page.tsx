"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "@/components/date-picker"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { CalendarView } from "@/components/calendar-view"
import { WeekView } from "@/components/week-view"
import { DayView } from "@/components/day-view"

export default function CalendarPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [month, setMonth] = useState<Date>(new Date())

  // Mock data for events/tasks
  const events = [
    {
      id: "1",
      title: "Team Meeting",
      description: "Weekly team sync",
      project: "Website Redesign",
      start: new Date(2023, 10, 15, 10, 0),
      end: new Date(2023, 10, 15, 11, 0),
      allDay: false,
      type: "meeting",
    },
    {
      id: "2",
      title: "Client Presentation",
      description: "Present website redesign progress",
      project: "Website Redesign",
      start: new Date(2023, 10, 17, 14, 0),
      end: new Date(2023, 10, 17, 15, 30),
      allDay: false,
      type: "meeting",
    },
    {
      id: "3",
      title: "Homepage Design Due",
      description: "Finalize homepage design",
      project: "Website Redesign",
      start: new Date(2023, 10, 18),
      end: new Date(2023, 10, 18),
      allDay: true,
      type: "deadline",
    },
    {
      id: "4",
      title: "API Integration",
      description: "Connect app to backend services",
      project: "Mobile App Development",
      start: new Date(2023, 10, 20),
      end: new Date(2023, 10, 22),
      allDay: true,
      type: "task",
    },
    {
      id: "5",
      title: "Marketing Campaign Launch",
      description: "Launch Q4 marketing campaign",
      project: "Marketing Campaign",
      start: new Date(2023, 10, 25),
      end: new Date(2023, 10, 25),
      allDay: true,
      type: "milestone",
    },
  ]

  const handlePreviousMonth = () => {
    const previousMonth = new Date(month)
    previousMonth.setMonth(previousMonth.getMonth() - 1)
    setMonth(previousMonth)
  }

  const handleNextMonth = () => {
    const nextMonth = new Date(month)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    setMonth(nextMonth)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>Create a new event or task on your calendar.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Event title" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Event description" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <DatePicker />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <DatePicker />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="project">Project</Label>
                <Select>
                  <SelectTrigger id="project">
                    <SelectValue placeholder="Select project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Redesign</SelectItem>
                    <SelectItem value="mobile">Mobile App Development</SelectItem>
                    <SelectItem value="marketing">Marketing Campaign</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Event Type</Label>
                <Select defaultValue="task">
                  <SelectTrigger id="type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="task">Task</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                    <SelectItem value="milestone">Milestone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex-1 flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous month</span>
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next month</span>
            </Button>
            <h2 className="text-lg font-semibold">
              {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h2>
          </div>
          <div className="flex space-x-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="website">Website Redesign</SelectItem>
                <SelectItem value="mobile">Mobile App Development</SelectItem>
                <SelectItem value="marketing">Marketing Campaign</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="task">Tasks</SelectItem>
                <SelectItem value="meeting">Meetings</SelectItem>
                <SelectItem value="deadline">Deadlines</SelectItem>
                <SelectItem value="milestone">Milestones</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="month">
        <TabsList>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="day">Day</TabsTrigger>
        </TabsList>
        <TabsContent value="month" className="mt-4">
          <CalendarView events={events} month={month} />
        </TabsContent>
        <TabsContent value="week" className="mt-4">
          <WeekView events={events} date={date} />
        </TabsContent>
        <TabsContent value="day" className="mt-4">
          <DayView events={events} date={date} />
        </TabsContent>
      </Tabs>

      <div className="flex flex-wrap gap-2">
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
          Meeting
        </Badge>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
          Task
        </Badge>
        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300">
          Deadline
        </Badge>
        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300">
          Milestone
        </Badge>
      </div>
    </div>
  )
}
