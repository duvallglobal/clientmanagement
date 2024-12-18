'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: 'Jan', subscribers: 1200 },
  { name: 'Feb', subscribers: 1300 },
  { name: 'Mar', subscribers: 1400 },
  { name: 'Apr', subscribers: 1600 },
  { name: 'May', subscribers: 1800 },
  { name: 'Jun', subscribers: 2000 },
]

export default function SubscriberAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscriber Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm">Total Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">+15%</div>
            <div className="text-sm">Growth Rate</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="subscribers" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

