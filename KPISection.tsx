import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function KPISection() {
  const kpis = [
    { title: "OnlyFans Subscribers", value: "5,234" },
    { title: "Monthly Revenue", value: "$42,567" },
    { title: "Social Engagement", value: "87,912" },
    { title: "Art Sales", value: "$3,450" },
  ]

  return (
    <div className="col-span-full">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Performance Indicators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

