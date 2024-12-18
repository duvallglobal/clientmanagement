'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export default function CalendarIntegration() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const events = [
    { date: new Date(2023, 11, 15), title: "New Art Collection Launch" },
    { date: new Date(2023, 11, 20), title: "OnlyFans Live Stream" },
    { date: new Date(2023, 11, 25), title: "Holiday Special Content" },
    { date: new Date(2023, 11, 28), title: "Year-End Subscriber Q&A" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold mb-4">Upcoming Events</h3>
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <span className="font-medium">{event.title}</span>
                  <Badge variant="outline">{event.date.toLocaleDateString()}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

