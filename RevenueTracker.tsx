import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RevenueTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">OnlyFans Revenue</h3>
            <p>This Month: $15,000</p>
            <p>Last Month: $13,500</p>
            <p>Growth: +11.1%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Art Sales</h3>
            <p>This Month: $3,500</p>
            <p>Last Month: $2,800</p>
            <p>Growth: +25%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Collaborations & Sponsorships</h3>
            <p>This Month: $2,000</p>
            <p>Last Month: $1,500</p>
            <p>Growth: +33.3%</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <p>This Month: $20,500</p>
            <p>Last Month: $17,800</p>
            <p>Overall Growth: +15.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

