'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: 'Jan', revenue: 5000 },
  { name: 'Feb', revenue: 6000 },
  { name: 'Mar', revenue: 7000 },
  { name: 'Apr', revenue: 8000 },
  { name: 'May', revenue: 9000 },
  { name: 'Jun', revenue: 10000 },
]

export default function FinancialOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold">$12,345</div>
            <div className="text-sm">Monthly Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">$3,456</div>
            <div className="text-sm">Pending Payout</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

