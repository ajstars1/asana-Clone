import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Mail, MoreHorizontal, Phone } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  phone: string
  role: string
  department: string
  avatar: string
  status: string
  joinedDate: string
  assignedTasks: number
  completedTasks: number
}

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500"
      case "Away":
        return "bg-yellow-500"
      case "Offline":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar className="h-20 w-20">
              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Badge className={`absolute bottom-0 right-0 h-3 w-3 rounded-full p-0 ${getStatusColor(member.status)}`} />
          </div>
          <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          <Badge variant="outline" className="mt-2">
            {member.department}
          </Badge>
          <div className="mt-4 grid w-full gap-2">
            <Button variant="outline" size="sm" className="justify-start">
              <Mail className="mr-2 h-4 w-4" />
              {member.email}
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              <Phone className="mr-2 h-4 w-4" />
              {member.phone}
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-sm">
            <p className="text-muted-foreground">Joined {member.joinedDate}</p>
            <p>
              <span className="font-medium">{member.assignedTasks}</span> tasks assigned
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Profile</DropdownMenuItem>
              <DropdownMenuItem>Assign Task</DropdownMenuItem>
              <DropdownMenuItem>Send Message</DropdownMenuItem>
              <DropdownMenuItem>Edit Member</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  )
}
