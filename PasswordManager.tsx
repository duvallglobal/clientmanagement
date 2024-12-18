'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Search, Lock } from 'lucide-react'

export default function PasswordManager() {
  const [activeTab, setActiveTab] = useState('add')

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Password Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="add" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4 bg-transparent border-b w-full justify-start space-x-8 h-auto pb-2">
            <TabsTrigger 
              value="add" 
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none px-0"
            >
              Add New Entry
            </TabsTrigger>
            <TabsTrigger 
              value="saved"
              className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-gray-900 data-[state=active]:border-b-2 data-[state=active]:border-gray-900 rounded-none px-0"
            >
              Saved Passwords
            </TabsTrigger>
          </TabsList>

          <TabsContent value="add">
            <div className="space-y-4">
              <Input placeholder="Website URL" />
              <Input placeholder="Username/Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Save Entry</Button>
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <div>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input placeholder="Search passwords..." className="pl-9" />
              </div>
              <div className="text-center py-8 text-gray-500">
                <Lock className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No passwords saved yet</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

