import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const revenueData = [
  { name: "Subscriptions", value: 35000 },
  { name: "Tips", value: 5000 },
  { name: "PPV Content", value: 2500 },
  { name: "Custom Content", value: 1500 },
]

const contentPerformanceData = [
  { name: "Post A", views: 1200, likes: 450, comments: 78 },
  { name: "Post B", views: 980, likes: 302, comments: 45 },
  { name: "Post C", views: 1500, likes: 680, comments: 120 },
  { name: "Post D", views: 1100, likes: 420, comments: 89 },
]

export default function VisualizationSection() {
  return (
    <div className="col-span-full lg:col-span-2">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Visualizations</h2>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>OnlyFans Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3b82f6" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contentPerformanceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" fill="#3b82f6" name="Views" />
                <Bar dataKey="likes" fill="#10b981" name="Likes" />
                <Bar dataKey="comments" fill="#f59e0b" name="Comments" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

