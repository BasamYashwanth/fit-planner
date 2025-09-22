import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Plus } from "lucide-react"

const workoutPlans = [
  {
    id: 1,
    title: "Upper Body Strength",
    duration: "45 min",
    difficulty: "Intermediate",
    exercises: 8,
    category: "Strength",
    image: "/person-doing-bench-press-in-gym.jpg",
  },
  {
    id: 2,
    title: "HIIT Cardio Blast",
    duration: "30 min",
    difficulty: "Advanced",
    exercises: 6,
    category: "Cardio",
    image: "/person-doing-high-intensity-interval-training.jpg",
  },
  {
    id: 3,
    title: "Core & Flexibility",
    duration: "25 min",
    difficulty: "Beginner",
    exercises: 10,
    category: "Core",
    image: "/person-doing-yoga-core-exercises.jpg",
  },
]

export function WorkoutPlanner() {
  return (
    <section id="workouts" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">TODAY'S WORKOUT PLANS</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our expertly crafted workout routines designed to help you reach your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {workoutPlans.map((workout) => (
            <Card key={workout.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={workout.image || "/placeholder.svg"}
                  alt={workout.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{workout.category}</Badge>
                  <Badge variant="outline">{workout.difficulty}</Badge>
                </div>
                <CardTitle className="text-xl">{workout.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {workout.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    {workout.exercises} exercises
                  </div>
                </div>
                <Button className="w-full">Start Workout</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Create Custom Workout
          </Button>
        </div>
      </div>
    </section>
  )
}
