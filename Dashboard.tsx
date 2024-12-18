'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ClientOverview from './ClientOverview'
import ContentLibrary from './ContentLibrary'
import ContentCalendar from './ContentCalendar'
import PerformanceMetrics from './PerformanceMetrics'
import FinancialOverview from './FinancialOverview'
import RevenueTracker from './RevenueTracker'
import MessagingWidget from './MessagingWidget'
import TaskManagement from './TaskManagement'
import PasswordManager from './PasswordManager'
import ResourceLibrary from './ResourceLibrary'
import Onboarding from './Onboarding'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="flex flex-wrap justify-start gap-2 mb-8">
          <TabsTrigger value="overview" className="px-4 py-2 rounded-md">Overview</TabsTrigger>
          <TabsTrigger value="content" className="px-4 py-2 rounded-md">Content</TabsTrigger>
          <TabsTrigger value="performance" className="px-4 py-2 rounded-md">Performance</TabsTrigger>
          <TabsTrigger value="finances" className="px-4 py-2 rounded-md">Finances</TabsTrigger>
          <TabsTrigger value="management" className="px-4 py-2 rounded-md">Management</TabsTrigger>
          <TabsTrigger value="resources" className="px-4 py-2 rounded-md">Resources</TabsTrigger>
          <TabsTrigger value="onboarding" className="px-4 py-2 rounded-md">Onboarding</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Client Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ClientOverview />
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Quick Communication</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <MessagingWidget />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="content">
          <div className="space-y-6">
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Content Library</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ContentLibrary />
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Content Calendar</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ContentCalendar />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <PerformanceMetrics />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="finances">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Financial Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <FinancialOverview />
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Revenue Tracker</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <RevenueTracker />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="management">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Task Management</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <TaskManagement />
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-semibold">Password Manager</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <PasswordManager />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="resources">
          <Card className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-lg font-semibold">Resource Library</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ResourceLibrary />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="onboarding">
          <Onboarding />
        </TabsContent>
      </Tabs>
    </div>
  )
}

