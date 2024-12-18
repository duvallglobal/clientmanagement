'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from 'lucide-react'

export default function TaskManagement() {
  const [activeTab, setActiveTab] = useState('all')
  const tabs = ['All', 'Pending', 'In-progress', 'Completed']

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <Button className="bg-gray-900 hover:bg-gray-800">New Task</Button>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-6 mb-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm ${
                activeTab === tab.toLowerCase()
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="border rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Review Contract</h3>
              <div className="flex items-center gap-2">
                <Badge variant="outline">pending</Badge>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500">Review and sign the project contract</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Due: 2/14/2024</span>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">high</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

