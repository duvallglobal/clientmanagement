'use client'

import { useState } from 'react'
import Navigation from './Navigation'
import ClientOverview from './ClientOverview'
import ContentLibrary from './ContentLibrary'
import MessagingWidget from './MessagingWidget'
import TaskManagement from './TaskManagement'
import PasswordManager from './PasswordManager'
import PerformanceMetrics from './PerformanceMetrics'
import RevenueTracker from './RevenueTracker'
import CalendarIntegration from './CalendarIntegration'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-6 py-8">
        <div className="flex space-x-4 mb-6">
          {['Overview', 'Content', 'Passwords', 'Tasks', 'Metrics', 'Finances'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === tab.toLowerCase()
                  ? 'bg-gray-200 text-gray-800'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ClientOverview />
            </div>
            <div className="lg:col-span-1">
              <MessagingWidget />
            </div>
            <div className="lg:col-span-3">
              <CalendarIntegration />
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="grid grid-cols-1 gap-6">
            <ContentLibrary />
          </div>
        )}

        {activeTab === 'passwords' && (
          <div className="grid grid-cols-1 gap-6">
            <PasswordManager />
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="grid grid-cols-1 gap-6">
            <TaskManagement />
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="grid grid-cols-1 gap-6">
            <PerformanceMetrics />
          </div>
        )}

        {activeTab === 'finances' && (
          <div className="grid grid-cols-1 gap-6">
            <RevenueTracker />
          </div>
        )}
      </div>
    </div>
  )
}

