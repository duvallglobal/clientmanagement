'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Metrics {
  facebook: {
    followers: number
    engagement: number
    reach: number
  }
  instagram: {
    followers: number
    engagement: number
    reach: number
  }
  tiktok: {
    followers: number
    engagement: number
    views: number
  }
  onlyfans: {
    subscribers: number
    revenue: number
    topPostLikes: number
  }
  reddit: {
    subscribers: number
    postKarma: number
    commentKarma: number
  }
}

const mockHistoricalData = [
  { date: '2023-01-01', facebook: 10000, instagram: 15000, tiktok: 20000, onlyfans: 500, reddit: 2000 },
  { date: '2023-02-01', facebook: 11000, instagram: 16000, tiktok: 22000, onlyfans: 550, reddit: 2200 },
  { date: '2023-03-01', facebook: 12000, instagram: 17000, tiktok: 24000, onlyfans: 600, reddit: 2400 },
  { date: '2023-04-01', facebook: 13000, instagram: 18000, tiktok: 26000, onlyfans: 650, reddit: 2600 },
  { date: '2023-05-01', facebook: 14000, instagram: 19000, tiktok: 28000, onlyfans: 700, reddit: 2800 },
  { date: '2023-06-01', facebook: 15000, instagram: 20000, tiktok: 30000, onlyfans: 750, reddit: 3000 },
]

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metrics')
        if (!response.ok) {
          throw new Error('Failed to fetch metrics')
        }
        const data = await response.json()
        setMetrics(data)
      } catch (error) {
        console.error('Error fetching metrics:', error)
      }
    }

    fetchMetrics()
    const intervalId = setInterval(fetchMetrics, 300000)
    return () => clearInterval(intervalId)
  }, [])

  if (!metrics) {
    return <div>Loading metrics...</div>
  }

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="facebook">Facebook</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            <TabsTrigger value="onlyfans">OnlyFans</TabsTrigger>
            <TabsTrigger value="reddit">Reddit</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="mt-4 space-y-4">
              <h3 className="text-lg font-semibold">Overall Growth</h3>
              <p>Total Audience: {(
                metrics.facebook.followers +
                metrics.instagram.followers +
                metrics.tiktok.followers +
                metrics.onlyfans.subscribers +
                metrics.reddit.subscribers
              ).toLocaleString()}</p>
              <p>Average Engagement: {(
                (metrics.facebook.engagement +
                metrics.instagram.engagement +
                metrics.tiktok.engagement) / 3
              ).toFixed(2)}%</p>
              <p>OnlyFans Revenue: ${metrics.onlyfans.revenue.toLocaleString()}</p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockHistoricalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="facebook" stroke="#3b5998" />
                  <Line type="monotone" dataKey="instagram" stroke="#e1306c" />
                  <Line type="monotone" dataKey="tiktok" stroke="#69c9d0" />
                  <Line type="monotone" dataKey="onlyfans" stroke="#00aff0" />
                  <Line type="monotone" dataKey="reddit" stroke="#ff4500" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="facebook">
            <div className="mt-4 space-y-2">
              <p>Followers: {metrics.facebook.followers.toLocaleString()}</p>
              <p>Engagement Rate: {metrics.facebook.engagement}%</p>
              <p>Reach: {metrics.facebook.reach.toLocaleString()} accounts</p>
            </div>
          </TabsContent>
          <TabsContent value="instagram">
            <div className="mt-4 space-y-2">
              <p>Followers: {metrics.instagram.followers.toLocaleString()}</p>
              <p>Engagement Rate: {metrics.instagram.engagement}%</p>
              <p>Reach: {metrics.instagram.reach.toLocaleString()} accounts</p>
            </div>
          </TabsContent>
          <TabsContent value="tiktok">
            <div className="mt-4 space-y-2">
              <p>Followers: {metrics.tiktok.followers.toLocaleString()}</p>
              <p>Engagement Rate: {metrics.tiktok.engagement}%</p>
              <p>Views: {metrics.tiktok.views.toLocaleString()}</p>
            </div>
          </TabsContent>
          <TabsContent value="onlyfans">
            <div className="mt-4 space-y-2">
              <p>Subscribers: {metrics.onlyfans.subscribers.toLocaleString()}</p>
              <p>Revenue: ${metrics.onlyfans.revenue.toLocaleString()}</p>
              <p>Top Post Likes: {metrics.onlyfans.topPostLikes.toLocaleString()}</p>
            </div>
          </TabsContent>
          <TabsContent value="reddit">
            <div className="mt-4 space-y-2">
              <p>Subscribers: {metrics.reddit.subscribers.toLocaleString()}</p>
              <p>Post Karma: {metrics.reddit.postKarma.toLocaleString()}</p>
              <p>Comment Karma: {metrics.reddit.commentKarma.toLocaleString()}</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

