'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Upload, Image, Video, PaintbrushIcon as PaintBrush, CheckCircle, XCircle } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface ContentItem {
  id: string
  name: string
  type: 'photo' | 'video' | 'artwork'
  status: 'approved' | 'pending' | 'rejected'
}

export default function ContentLibrary() {
  const [activeTab, setActiveTab] = useState('photos')
  const [content, setContent] = useState<ContentItem[]>([
    { id: '1', name: 'Beach photoshoot.jpg', type: 'photo', status: 'pending' },
    { id: '2', name: 'Studio session.mp4', type: 'video', status: 'approved' },
    { id: '3', name: 'Abstract painting.png', type: 'artwork', status: 'rejected' },
  ])

  const handleApprove = (id: string) => {
    setContent(content.map(item => 
      item.id === id ? { ...item, status: 'approved' } : item
    ))
  }

  const handleReject = (id: string) => {
    setContent(content.map(item => 
      item.id === id ? { ...item, status: 'rejected' } : item
    ))
  }

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Content Library</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="photos" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4 bg-transparent border-b w-full justify-start space-x-8 h-auto pb-2">
            <TabsTrigger 
              value="photos" 
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none px-0"
            >
              OnlyFans Photos
            </TabsTrigger>
            <TabsTrigger 
              value="videos"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none px-0"
            >
              OnlyFans Videos
            </TabsTrigger>
            <TabsTrigger 
              value="artwork"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none px-0"
            >
              Artwork
            </TabsTrigger>
            <TabsTrigger 
              value="approval"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none px-0"
            >
              Approval Needed
            </TabsTrigger>
          </TabsList>

          {['photos', 'videos', 'artwork'].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start text-gray-600 border-dashed">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload {tab === 'photos' ? 'Photo' : tab === 'videos' ? 'Video' : 'Artwork'}
                </Button>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Submit {tab === 'photos' ? 'Photo' : tab === 'videos' ? 'Video' : 'Artwork'}
                </Button>
              </div>
              <div className="mt-4 space-y-2">
                {content.filter(item => item.type === tab.slice(0, -1)).map(item => (
                  <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center">
                      {item.type === 'photo' && <Image className="h-4 w-4 mr-2" />}
                      {item.type === 'video' && <Video className="h-4 w-4 mr-2" />}
                      {item.type === 'artwork' && <PaintBrush className="h-4 w-4 mr-2" />}
                      <span>{item.name}</span>
                    </div>
                    <Badge variant={item.status === 'approved' ? 'success' : item.status === 'rejected' ? 'destructive' : 'secondary'}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="approval">
            <div className="space-y-2">
              {content.filter(item => item.status === 'pending').map(item => (
                <div key={item.id} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center">
                    {item.type === 'photo' && <Image className="h-4 w-4 mr-2" />}
                    {item.type === 'video' && <Video className="h-4 w-4 mr-2" />}
                    {item.type === 'artwork' && <PaintBrush className="h-4 w-4 mr-2" />}
                    <span>{item.name}</span>
                  </div>
                  <div>
                    <Button variant="ghost" size="sm" onClick={() => handleApprove(item.id)}>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleReject(item.id)}>
                      <XCircle className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

