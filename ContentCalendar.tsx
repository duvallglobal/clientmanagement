'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"

export default function ContentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <div className="mt-4">
          <h4 className="font-bold mb-2">Upcoming Posts</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-opacity-50 bg-white p-2 rounded">
              <span>New Art Collection</span>
              <span className="text-sm">Today, 3:00 PM</span>
            </div>
            <div className="flex items-center justify-between bg-opacity-50 bg-white p-2 rounded">
              <span>OnlyFans Update</span>
              <span className="text-sm">Tomorrow, 2:00 PM</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

