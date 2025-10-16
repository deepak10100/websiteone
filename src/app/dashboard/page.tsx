
"use client"

import { Activity, ArrowUpRight, DollarSign, Users, CreditCard, FileText } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area
} from "recharts"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const revenueData = [
  { month: "Jan", revenue: Math.floor(Math.random() * 3000) + 1000 },
  { month: "Feb", revenue: Math.floor(Math.random() * 3000) + 1000 },
  { month: "Mar", revenue: Math.floor(Math.random() * 3000) + 1000 },
  { month: "Apr", revenue: Math.floor(Math.random() * 3000) + 1000 },
  { month: "May", revenue: Math.floor(Math.random() * 3000) + 1000 },
  { month: "Jun", revenue: Math.floor(Math.random() * 3000) + 1000 },
]

const projectsData = [
  { date: "2024-01", active: 4, new: 1 },
  { date: "2024-02", active: 3, new: 2 },
  { date: "2024-03", active: 5, new: 1 },
  { date: "2024-04", active: 6, new: 3 },
  { date: "2024-05", active: 5, new: 2 },
  { date: "2024-06", active: 7, new: 1 },
]

const activityData = [
    { hour: "12 AM", views: Math.floor(Math.random() * 500) },
    { hour: "4 AM", views: Math.floor(Math.random() * 500) },
    { hour: "8 AM", views: Math.floor(Math.random() * 500) },
    { hour: "12 PM", views: Math.floor(Math.random() * 500) },
    { hour: "4 PM", views: Math.floor(Math.random() * 500) },
    { hour: "8 PM", views: Math.floor(Math.random() * 500) },
]

const invoiceStatusData = [
  { name: 'Paid', value: 400, fill: "hsl(var(--chart-1))" },
  { name: 'Pending', value: 300, fill: "hsl(var(--chart-2))"  },
  { name: 'Overdue', value: 150, fill: "hsl(var(--chart-3))"  },
]
const invoiceChartConfig: ChartConfig = {
    value: {
        label: "Invoices",
    },
    Paid: {
        label: "Paid",
        color: "hsl(var(--chart-1))",
    },
    Pending: {
        label: "Pending",
        color: "hsl(var(--chart-2))",
    },
    Overdue: {
        label: "Overdue",
        color: "hsl(var(--chart-3))",
    },
}


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-bold">+5</div>
              <p className="text-xs text-muted-foreground">
                +2 since last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                $1,250.00 due
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={revenueData}>
                  <XAxis
                    dataKey="month"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    cursor={{fill: 'hsla(var(--muted))'}}
                    contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}}
                  />
                  <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3">
             <CardHeader>
                <CardTitle>Invoice Status</CardTitle>
                <CardDescription>Breakdown of recent invoices.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={invoiceChartConfig} className="mx-auto aspect-square h-[250px]">
                    <PieChart>
                         <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                         />
                        <Pie data={invoiceStatusData} dataKey="value" nameKey="name" innerRadius={60} strokeWidth={5}>
                             {invoiceStatusData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Recent Invoices</CardTitle>
                    <CardDescription>
                        A list of your most recent invoices.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden sm:table-cell">Status</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Liam Johnson</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                liam@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="outline">
                                Approved
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Olivia Smith</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                olivia@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="destructive">
                                Declined
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
                            <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </CardContent>
            </Card>
             <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                    <CardDescription>Your active projects over the last 6 months.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={projectsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))'}} />
                        <Legend />
                        <Line type="monotone" dataKey="active" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="new" stroke="hsl(var(--secondary))" strokeWidth={2} />
                    </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  )

    