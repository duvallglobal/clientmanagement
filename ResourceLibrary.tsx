import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book } from 'lucide-react'

export default function ResourceLibrary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <a href="#" className="block bg-opacity-50 bg-white p-3 rounded hover:bg-opacity-75 transition-colors">
            <div className="flex items-center space-x-2">
              <Book className="h-5 w-5 text-indigo-500" />
              <span>OnlyFans Creator Guide</span>
            </div>
          </a>
          {/* More resources */}
        </div>
      </CardContent>
    </Card>
  )
}

