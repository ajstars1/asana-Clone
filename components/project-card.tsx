import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, CheckSquare } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: string
    name: string
    description: string
    progress: number
    dueDate: string
    members: number
    tasks: {
      total: number
      completed: number
    }
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle>
          <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
            {project.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">{project.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <CalendarIcon className="mr-1 h-4 w-4" />
          {project.dueDate}
        </div>
        <div className="flex items-center">
          <CheckSquare className="mr-1 h-4 w-4" />
          {project.tasks.completed}/{project.tasks.total}
        </div>
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-1">
            {Array.from({ length: Math.min(project.members, 3) }).map((_, i) => (
              <Avatar key={i} className="h-6 w-6 border-2 border-background">
                <AvatarImage src="/placeholder.svg" alt="Team member" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ))}
          </div>
          {project.members > 3 && <span>+{project.members - 3}</span>}
        </div>
      </CardFooter>
    </Card>
  )
}
