import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CampaignPlanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Planner</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-opacity-50 bg-white p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Summer Sale Campaign</span>
              <span className="text-sm bg-green-500 text-white px-2 py-1 rounded">Active</span>
            </div>
            <div className="bg-gray-200 rounded h-2">
              <div className="bg-green-500 h-full rounded" style={{ width: '75%' }}></div>
            </div>
          </div>
          {/* More campaigns */}
        </div>
        <Button className="mt-4 w-full">Create New Campaign</Button>
      </CardContent>
    </Card>
  )
}

