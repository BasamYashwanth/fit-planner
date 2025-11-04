import DietPlanner from "@/components/features/DietPlanner";

export default function NutritionPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Nutrition</h1>
      <DietPlanner />
    </div>
  );
}
