import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubscriberMetrics() {
  const metrics = [
    { title: "Active Subscribers", value: "4,892" },
    { title: "Renewal Rate", value: "78%" },
    { title: "Message Response Rate", value: "92%" },
    { title: "Average Tip Amount", value: "$12.50" },
  ]

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Subscriber Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="flex justify-between items-center">
              <span className="text-sm font-medium">{metric.title}</span>
              <span className="text-lg font-bold">{metric.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

