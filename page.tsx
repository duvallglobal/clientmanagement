import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Client Portal</h1>
        <p className="text-gray-500">Manage your projects and communications</p>
      </div>
      <Dashboard />
    </div>
  )
}

