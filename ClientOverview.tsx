import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ClientOverview() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Consultant Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-normal text-gray-900">Project Progress</h4>
            <span className="text-2xl font-semibold">75%</span>
          </div>
          <Progress 
  value={75} 
  className="h-2 bg-gray-100" 
/>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-normal text-gray-900">Tasks Completed</h4>
            <span className="text-2xl font-semibold">24/36</span>
          </div>
          <Progress 
  value={66.7} 
  className="h-2 bg-gray-100" 
/>
        </div>
      </CardContent>
      <style jsx>{`
  :global(.progress-indicator) {
    background-color: #1f2937;
  }
`}</style>
    </Card>
  )
}

