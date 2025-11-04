"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Play, BookOpen, X, Plus, Calendar, Check } from "lucide-react"
import { toast } from "sonner"

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
  const [openVideo, setOpenVideo] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<{ title: string; id: string } | null>(null)
  const [selectedExercises, setSelectedExercises] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const addToWorkout = (exerciseId: number) => {
    if (selectedExercises.includes(exerciseId)) {
      setSelectedExercises(prev => prev.filter(id => id !== exerciseId))
      toast.info("Exercise removed from workout plan")
    } else {
      setSelectedExercises(prev => [...prev, exerciseId])
      toast.success("Exercise added to workout plan")
    }
  }

  const filteredExercises = exercises
    .filter(exercise => 
      (activeCategory === "All" || exercise.category === activeCategory) &&
      (searchTerm === "" || 
        exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exercise.equipment.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )

  const videoMap: Record<number, { title: string; id: string }> = {
    1: { title: "How to Bench Press - Proper Form", id: "gRVjAtPip0Y" },
    2: { title: "How to Deadlift - Technique", id: "op9kVnSso6Q" },
    3: { title: "Perfect Push-Up Form & Progressions", id: "IODxDxX7oi4" },
    4: { title: "How to Squat Properly", id: "aclHkVaku9U" },
    5: { title: "How to Do a Pull-Up (Progression)", id: "eGo4IYlbE5g" },
    6: { title: "Plank - Proper Technique", id: "ASdvN_XEl_c" },
  }

  const openExerciseVideo = (exerciseId: number) => {
    const vid = videoMap[exerciseId]
    if (vid) {
      setCurrentVideo(vid)
      setOpenVideo(true)
      // prevent background scroll
      if (typeof document !== "undefined") document.body.style.overflow = "hidden"
    }
  }

  const closeVideo = () => {
    setOpenVideo(false)
    setCurrentVideo(null)
    if (typeof document !== "undefined") document.body.style.overflow = "auto"
  }
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
            <Input 
              placeholder="Search exercises..." 
              className="pl-10" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === activeCategory ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {selectedExercises.length > 0 && (
          <div className="mb-8 p-4 bg-secondary/20 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <h3 className="font-semibold">Today's Workout Plan</h3>
              </div>
              <Badge variant="secondary">{selectedExercises.length} exercises selected</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedExercises.map((id) => {
                const exercise = exercises.find(e => e.id === id)
                return exercise ? (
                  <Badge key={id} variant="outline" className="pl-2">
                    {exercise.name}
                    <button 
                      onClick={() => addToWorkout(id)}
                      className="ml-1 hover:bg-secondary/20 p-1 rounded-full"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ) : null
              })}
            </div>
          </div>
        )}

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
                  <Button size="sm" variant="secondary" onClick={() => openExerciseVideo(exercise.id)}>
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
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                    <Button 
                      variant={selectedExercises.includes(exercise.id) ? "default" : "secondary"} 
                      size="sm"
                      onClick={() => addToWorkout(exercise.id)}
                    >
                      {selectedExercises.includes(exercise.id) ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Added
                        </>
                      ) : (
                        <>
                          <Plus className="mr-2 h-4 w-4" />
                          Add
                        </>
                      )}
                    </Button>
                  </div>
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
        {openVideo && currentVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="relative w-full max-w-4xl bg-white rounded shadow-lg overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b">
                <div className="font-semibold">{currentVideo.title}</div>
                <button onClick={closeVideo} aria-label="Close video" className="p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-3 text-right">
                <Button variant="secondary" onClick={closeVideo}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
