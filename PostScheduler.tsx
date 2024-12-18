import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const platforms = ['Twitter', 'Instagram', 'LinkedIn', 'Facebook', 'TikTok', 'Pinterest']

export default function PostScheduler() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(platform)
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    )
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Post Scheduler</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label htmlFor="post-content" className="block text-sm font-medium text-gray-700 mb-1">Post Content</label>
            <Textarea id="post-content" placeholder="Write your post here..." className="w-full" />
          </div>
          <div>
            <label htmlFor="post-date" className="block text-sm font-medium text-gray-700 mb-1">Schedule Date</label>
            <Input type="datetime-local" id="post-date" className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Platforms</label>
            <div className="flex flex-wrap gap-2">
              {platforms.map(platform => (
                <div key={platform} className="flex items-center">
                  <Checkbox
                    id={`platform-${platform}`}
                    checked={selectedPlatforms.includes(platform)}
                    onCheckedChange={() => handlePlatformToggle(platform)}
                  />
                  <label
                    htmlFor={`platform-${platform}`}
                    className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {platform}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="post-type" className="block text-sm font-medium text-gray-700 mb-1">Post Type</label>
            <Select>
              <SelectTrigger id="post-type">
                <SelectValue placeholder="Select post type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="text">Text</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="video">Video</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Schedule Post</Button>
        </form>
      </CardContent>
    </Card>
  )
}

