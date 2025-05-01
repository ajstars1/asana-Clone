import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, User } from "lucide-react"
import Link from "next/link"
import { TeamMemberCard } from "@/components/team-member-card"
import { TeamTable } from "@/components/team-table"

export default function TeamPage() {
  // Mock data for team members
  const teamMembers = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex@example.com",
      phone: "+1 (555) 123-4567",
      role: "Project Manager",
      department: "Product",
      avatar: "/placeholder.svg",
      status: "Active",
      joinedDate: "Jan 2022",
      assignedTasks: 8,
      completedTasks: 45,
    },
    {
      id: "2",
      name: "Sarah Miller",
      email: "sarah@example.com",
      phone: "+1 (555) 234-5678",
      role: "UI/UX Designer",
      department: "Design",
      avatar: "/placeholder.svg",
      status: "Active",
      joinedDate: "Mar 2022",
      assignedTasks: 5,
      completedTasks: 37,
    },
    {
      id: "3",
      name: "David Chen",
      email: "david@example.com",
      phone: "+1 (555) 345-6789",
      role: "Frontend Developer",
      department: "Engineering",
      avatar: "/placeholder.svg",
      status: "Active",
      joinedDate: "Feb 2022",
      assignedTasks: 12,
      completedTasks: 64,
    },
    {
      id: "4",
      name: "Maria Garcia",
      email: "maria@example.com",
      phone: "+1 (555) 456-7890",
      role: "Backend Developer",
      department: "Engineering",
      avatar: "/placeholder.svg",
      status: "Active",
      joinedDate: "Apr 2022",
      assignedTasks: 7,
      completedTasks: 52,
    },
    {
      id: "5",
      name: "James Wilson",
      email: "james@example.com",
      phone: "+1 (555) 567-8901",
      role: "QA Engineer",
      department: "Engineering",
      avatar: "/placeholder.svg",
      status: "Away",
      joinedDate: "Jun 2022",
      assignedTasks: 4,
      completedTasks: 28,
    },
    {
      id: "6",
      name: "Emily Brown",
      email: "emily@example.com",
      phone: "+1 (555) 678-9012",
      role: "Content Strategist",
      department: "Marketing",
      avatar: "/placeholder.svg",
      status: "Active",
      joinedDate: "May 2022",
      assignedTasks: 6,
      completedTasks: 31,
    },
    {
      id: "7",
      name: "Michael Lee",
      email: "michael@example.com",
      phone: "+1 (555) 789-0123",
      role: "Product Owner",
      department: "Product",
      avatar: "/placeholder.svg",
      status: "Offline",
      joinedDate: "Jul 2022",
      assignedTasks: 3,
      completedTasks: 42,
    },
    {
      id: "8",
      name: "Jessica Taylor",
      email: "jessica@example.com",
      phone: "+1 (555) 890-1234",
      role: "Data Analyst",
      department: "Analytics",
      avatar: "/placeholder.svg",
      status: "Active",
      joinedDate: "Aug 2022",
      assignedTasks: 5,
      completedTasks: 19,
    },
  ]

  // Department statistics
  const departments = [
    { name: "Engineering", count: 3 },
    { name: "Design", count: 1 },
    { name: "Product", count: 2 },
    { name: "Marketing", count: 1 },
    { name: "Analytics", count: 1 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Team</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>Add a new member to your team.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter full name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Enter role" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <User className="h-8 w-8 text-muted-foreground" />
              <h3 className="text-xl font-bold">{teamMembers.length}</h3>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center space-x-1">
                <Badge className="h-2 w-2 rounded-full bg-green-500 p-0" />
                <span className="text-sm font-medium">Active</span>
              </div>
              <h3 className="text-xl font-bold">6</h3>
              <p className="text-sm text-muted-foreground">Online Members</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center space-x-1">
                <Badge className="h-2 w-2 rounded-full bg-yellow-500 p-0" />
                <span className="text-sm font-medium">Away</span>
              </div>
              <h3 className="text-xl font-bold">1</h3>
              <p className="text-sm text-muted-foreground">Away Members</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center space-x-1">
                <Badge className="h-2 w-2 rounded-full bg-gray-500 p-0" />
                <span className="text-sm font-medium">Offline</span>
              </div>
              <h3 className="text-xl font-bold">1</h3>
              <p className="text-sm text-muted-foreground">Offline Members</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search team members..." className="w-full pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="product">Product</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="analytics">Analytics</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="active">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="away">Away</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Tabs defaultValue="grid">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="table">Table View</TabsTrigger>
          </TabsList>
          <div className="text-sm text-muted-foreground">
            Showing <strong>{teamMembers.length}</strong> team members
          </div>
        </div>
        <TabsContent value="grid" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="table" className="mt-4">
          <TeamTable members={teamMembers} />
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Departments</h3>
            <div className="space-y-4">
              {departments.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between">
                  <span>{dept.name}</span>
                  <Badge variant="outline">{dept.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg" alt="Sarah Miller" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Sarah Miller</span> completed task{" "}
                    <Link href="#" className="font-medium text-primary hover:underline">
                      Create wireframes
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg" alt="David Chen" />
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">David Chen</span> was assigned to{" "}
                    <Link href="#" className="font-medium text-primary hover:underline">
                      Implement responsive design
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="mt-1">
                  <AvatarImage src="/placeholder.svg" alt="Alex Johnson" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Alex Johnson</span> created project{" "}
                    <Link href="#" className="font-medium text-primary hover:underline">
                      Mobile App Development
                    </Link>
                  </p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
