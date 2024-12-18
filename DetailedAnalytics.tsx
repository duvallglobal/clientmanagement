import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const engagementData = [
  { date: "2024-12-01", instagram: 1000, twitter: 800, tiktok: 1200, facebook: 600, reddit: 400 },
  { date: "2024-12-02", instagram: 1100, twitter: 850, tiktok: 1300, facebook: 650, reddit: 450 },
  { date: "2024-12-03", instagram: 1050, twitter: 900, tiktok: 1400, facebook: 700, reddit: 500 },
  { date: "2024-12-04", instagram: 1200, twitter: 950, tiktok: 1500, facebook: 750, reddit: 550 },
  { date: "2024-12-05", instagram: 1300, twitter: 1000, tiktok: 1600, facebook: 800, reddit: 600 },
]

export default function DetailedAnalytics() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Detailed Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="realtime">
          <TabsList>
            <TabsTrigger value="realtime">Real-time Activity</TabsTrigger>
            <TabsTrigger value="engagement">Engagement Graphs</TabsTrigger>
            <TabsTrigger value="crossplatform">Cross-Platform Performance</TabsTrigger>
          </TabsList>
          <TabsContent value="realtime">
            <div className="text-center py-4">Real-time activity data would be displayed here.</div>
          </TabsContent>
          <TabsContent value="engagement">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="instagram" stroke="#E1306C" name="Instagram" />
                <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" name="Twitter" />
                <Line type="monotone" dataKey="tiktok" stroke="#000000" name="TikTok" />
                <Line type="monotone" dataKey="facebook" stroke="#4267B2" name="Facebook" />
                <Line type="monotone" dataKey="reddit" stroke="#FF4500" name="Reddit" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="crossplatform">
            <div className="text-center py-4">Cross-platform performance comparisons would be displayed here.</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

