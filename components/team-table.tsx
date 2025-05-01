import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

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

interface TeamTableProps {
  members: TeamMember[]
}

export function TeamTable({ members }: TeamTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Away":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Offline":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="border rounded-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50">
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Role</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Department</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Tasks</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Joined</th>
              <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground w-[50px]"></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-t hover:bg-muted/50">
                <td className="p-4 align-middle">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 align-middle">{member.role}</td>
                <td className="p-4 align-middle">
                  <Badge variant="outline">{member.department}</Badge>
                </td>
                <td className="p-4 align-middle">
                  <Badge variant="secondary" className={getStatusColor(member.status)}>
                    {member.status}
                  </Badge>
                </td>
                <td className="p-4 align-middle">
                  <div className="flex flex-col">
                    <span>{member.assignedTasks} assigned</span>
                    <span className="text-sm text-muted-foreground">{member.completedTasks} completed</span>
                  </div>
                </td>
                <td className="p-4 align-middle">{member.joinedDate}</td>
                <td className="p-4 align-middle">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Assign Task</DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuItem>Edit Member</DropdownMenuItem>
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
