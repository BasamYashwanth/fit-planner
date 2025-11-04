import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WorkoutPlanner } from "@/components/workout-planner";
import { ProgressTracker } from "@/components/progress-tracker";
import { ExerciseLibrary } from "@/components/exercise-library";
import DietPlanner from "@/components/features/DietPlanner";
import AISuggestions from "@/components/ai-suggestions";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WorkoutPlanner />
        <ProgressTracker />
        <ExerciseLibrary />

        <div className="container mx-auto p-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Nutrition</h2>
          </div>
          <DietPlanner />
        </div>

        <div id="ai-suggestions" className="container mx-auto p-4 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">AI Suggestions</h2>
          </div>
          <AISuggestions />
        </div>
      </main>
    </div>
  );
}
