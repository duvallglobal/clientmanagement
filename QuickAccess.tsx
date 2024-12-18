import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuickAccess() {
  const quickAccessItems = [
    { title: "OnlyFans Manager", icon: "🔒" },
    { title: "Marketing Hub", icon: "📈" },
    { title: "Art Business", icon: "🎨" },
    { title: "Media Manager", icon: "📸" },
  ]

  return (
    <Card className="col-span-full lg:col-span-1">
      <CardHeader>
        <CardTitle>Quick Access</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {quickAccessItems.map((item) => (
            <Button key={item.title} variant="outline" className="h-20 text-center">
              <div>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm">{item.title}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

