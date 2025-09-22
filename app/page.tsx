import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WorkoutPlanner } from "@/components/workout-planner"
import { ProgressTracker } from "@/components/progress-tracker"
import { ExerciseLibrary } from "@/components/exercise-library"

export default function FitnessPlanner() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WorkoutPlanner />
        <ProgressTracker />
        <ExerciseLibrary />
      </main>
    </div>
  )
}
