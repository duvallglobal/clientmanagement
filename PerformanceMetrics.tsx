'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

    // Fetch metrics immediately
    fetchMetrics()

    // Set up polling every 5 minutes (300000 ms)
    const intervalId = setInterval(fetchMetrics, 300000)

    // Clean up interval on component unmount
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
        <Tabs defaultValue="facebook">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="facebook">Facebook</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            <TabsTrigger value="onlyfans">OnlyFans</TabsTrigger>
            <TabsTrigger value="reddit">Reddit</TabsTrigger>
          </TabsList>
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
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Overall Growth</h3>
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
        </div>
      </CardContent>
    </Card>
  )
}

