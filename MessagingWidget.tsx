'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  avatar: string
}

export default function MessagingWidget() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "MJ Duvall",
      content: "Hi, I've reviewed your latest content submissions.",
      timestamp: "2:30 PM",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    {
      id: 2,
      sender: "You",
      content: "Thanks! What are your thoughts on the new photos?",
      timestamp: "2:31 PM",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  ])

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="flex-row items-center gap-3 pb-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>MJ</AvatarFallback>
        </Avatar>
        <span className="text-xl font-semibold">MJ Duvall</span>
      </CardHeader>
      <CardContent className="flex flex-col h-[400px]">
        <ScrollArea className="flex-1 -mx-4 px-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.sender === "You" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={message.avatar} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
                <div className={`flex flex-col ${
                  message.sender === "You" ? "items-end" : ""
                }`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{message.sender}</span>
                    <span className="text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <div className={`rounded-2xl px-4 py-2 max-w-[280px] ${
                    message.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="mt-4 flex gap-2">
          <Input 
            placeholder="Type your message..." 
            className="flex-1"
          />
          <Button className="bg-gray-900 hover:bg-gray-800">Send</Button>
        </div>
      </CardContent>
    </Card>
  )
}

