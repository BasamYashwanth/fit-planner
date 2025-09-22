import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Play, BookOpen } from "lucide-react"

const exercises = [
  {
    id: 1,
    name: "Bench Press",
    category: "Chest",
    difficulty: "Intermediate",
    equipment: "Barbell",
    image: "/bench-press-demonstration.png",
  },
  {
    id: 2,
    name: "Deadlift",
    category: "Back",
    difficulty: "Advanced",
    equipment: "Barbell",
    image: "/deadlift-demonstration.png",
  },
  {
    id: 3,
    name: "Push-ups",
    category: "Chest",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/push-up-demonstration.png",
  },
  {
    id: 4,
    name: "Squats",
    category: "Legs",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/squat-demonstration.png",
  },
  {
    id: 5,
    name: "Pull-ups",
    category: "Back",
    difficulty: "Intermediate",
    equipment: "Pull-up Bar",
    image: "/pull-up-exercise-demonstration.jpg",
  },
  {
    id: 6,
    name: "Plank",
    category: "Core",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    image: "/plank-exercise-demonstration.jpg",
  },
]

const categories = ["All", "Chest", "Back", "Legs", "Arms", "Core", "Shoulders"]

export function ExerciseLibrary() {
  return (
    <section id="exercises" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">EXERCISE LIBRARY</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover hundreds of exercises with detailed instructions and video demonstrations.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search exercises..." className="pl-10" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={exercise.image || "/placeholder.svg"}
                  alt={exercise.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" variant="secondary">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{exercise.category}</Badge>
                  <Badge variant="outline">{exercise.difficulty}</Badge>
                </div>
                <CardTitle className="text-lg">{exercise.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{exercise.equipment}</span>
                  <Button variant="ghost" size="sm">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Exercises
          </Button>
        </div>
      </div>
    </section>
  )
}
