"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface CalendarEvent {
  id: string
  title: string
  description: string
  project: string
  start: Date
  end: Date
  allDay: boolean
  type: "meeting" | "task" | "deadline" | "milestone"
}

interface WeekViewProps {
  events: CalendarEvent[]
  date: Date
}

export function WeekView({ events, date }: WeekViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Get the start of the week (Sunday)
  const startOfWeek = new Date(date)
  startOfWeek.setDate(date.getDate() - date.getDay())

  // Create week days array
  const days = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek)
    day.setDate(startOfWeek.getDate() + i)
    return {
      date: day,
      isToday: new Date().toDateString() === day.toDateString(),
      events: events.filter((event) => {
        const eventDate = new Date(event.start)
        return eventDate.toDateString() === day.toDateString()
      }),
    }
  })

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event)
    setIsDialogOpen(true)
  }

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "meeting":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
      case "task":
        return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300"
      case "deadline":
        return "bg-orange-100 text-orange-800 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300"
      case "milestone":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300"
      default:
        return ""
    }
  }

  // Create time slots for the day
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 8 // Start at 8 AM
    return {
      time: `${hour % 12 === 0 ? 12 : hour % 12}${hour < 12 ? "am" : "pm"}`,
      hour,
    }
  })

  return (
    <>
      <div className="grid grid-cols-8 gap-1">
        <div className="col-span-1"></div>
        {days.map((day) => (
          <div
            key={day.date.toISOString()}
            className={cn(
              "h-10 flex flex-col items-center justify-center font-medium text-sm",
              day.isToday && "bg-primary/10 rounded-t-md",
            )}
          >
            <div>{day.date.toLocaleDateString("en-US", { weekday: "short" })}</div>
            <div>{day.date.getDate()}</div>
          </div>
        ))}

        {timeSlots.map((slot) => (
          <>
            <div
              key={slot.time}
              className="col-span-1 h-20 flex items-start justify-end pr-2 text-sm text-muted-foreground"
            >
              {slot.time}
            </div>
            {days.map((day) => {
              const hourEvents = day.events.filter((event) => {
                if (event.allDay) return false
                const eventHour = event.start.getHours()
                return eventHour === slot.hour
              })

              return (
                <Card
                  key={`${day.date.toISOString()}-${slot.hour}`}
                  className={cn("h-20 p-1 overflow-hidden border-t-0 rounded-none", day.isToday && "bg-primary/5")}
                >
                  <div className="space-y-1 overflow-y-auto max-h-full">
                    {hourEvents.map((event) => (
                      <Badge
                        key={event.id}
                        className={cn(
                          "w-full justify-start font-normal text-xs cursor-pointer",
                          getEventBadgeColor(event.type),
                        )}
                        onClick={() => handleEventClick(event)}
                      >
                        {event.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - {event.title}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="font-medium mb-2">All-day Events</h3>
        <div className="space-y-2">
          {days.flatMap((day) =>
            day.events
              .filter((event) => event.allDay)
              .map((event) => (
                <div key={event.id} className="flex items-center gap-2" onClick={() => handleEventClick(event)}>
                  <div className="w-24 text-sm text-muted-foreground">
                    {day.date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}
                  </div>
                  <Badge className={cn("justify-start font-normal cursor-pointer", getEventBadgeColor(event.type))}>
                    {event.title}
                  </Badge>
                </div>
              )),
          )}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
            <DialogDescription>{selectedEvent?.project}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <p>{selectedEvent?.description}</p>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Start:</span>
                <span>
                  {selectedEvent?.start.toLocaleDateString()}
                  {!selectedEvent?.allDay &&
                    ` ${selectedEvent?.start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">End:</span>
                <span>
                  {selectedEvent?.end.toLocaleDateString()}
                  {!selectedEvent?.allDay &&
                    ` ${selectedEvent?.end.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Type:</span>
                <Badge className={getEventBadgeColor(selectedEvent?.type || "")}>
                  {selectedEvent?.type.charAt(0).toUpperCase() + selectedEvent?.type.slice(1)}
                </Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
