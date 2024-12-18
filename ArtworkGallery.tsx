import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ArtworkGallery() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Artwork Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {[2, 3, 4, 5, 6, 7].map((num) => (
            <img
              key={num}
              src={`https://picsum.photos/100/100?random=${num}`}
              alt="Artwork"
              className="rounded cursor-pointer hover:opacity-75 transition-opacity"
            />
          ))}
        </div>
        <Button className="mt-4 w-full">View All Artwork</Button>
      </CardContent>
    </Card>
  )
}

