"use client";
import React, { useState } from "react";

type Goal = "lose" | "maintain" | "gain";

function generateWorkout(goal: Goal, days: number) {
  const workouts: string[] = [];
  if (goal === "lose") {
    workouts.push("3x/week: Full-body HIIT sessions (30-40 min) focusing on compound movements and cardio intervals.");
    if (days >= 4) workouts.push("1-2x/week: Low-intensity steady-state cardio (30–45 min) for recovery and extra calorie burn.");
  } else if (goal === "gain") {
    workouts.push("4x/week: Push/Pull/Legs split with progressive overload and compound lifts (45-60 min).");
    if (days >= 5) workouts.push("1x/week: Accessory/hypertrophy day focusing on weak points and higher volume.");
  } else {
    workouts.push("3-4x/week: Mix of strength (compound lifts) and moderate cardio; maintain intensity to preserve muscle mass.");
  }

  // Add sample weekly split
  if (days <= 2) {
    workouts.push("Sample split: Day 1 - Full body strength; Day 2 - Cardio + core.");
  } else if (days === 3) {
    workouts.push("Sample split: Day 1 - Push/Upper; Day 2 - Lower; Day 3 - Full body or conditioning.");
  } else if (days === 4) {
    workouts.push("Sample split: Upper / Lower / Push / Pull or Upper-Lower with conditioning.");
  } else {
    workouts.push("Sample split: Push / Pull / Legs / Upper / Lower with active recovery.");
  }

  return workouts;
}

function generateDiet(goal: Goal) {
  const diet: string[] = [];
  if (goal === "lose") {
    diet.push("Aim for a moderate calorie deficit (~300-500 kcal/day) with high protein (1.6-2.2 g/kg) to preserve muscle.");
    diet.push("Prioritize vegetables, lean proteins, whole grains, and healthy fats; use portion control and track intake.");
  } else if (goal === "gain") {
    diet.push("Aim for a small calorie surplus (~250-500 kcal/day) with high protein and progressive overload training.");
    diet.push("Include nutrient-dense carbs around workouts and 3-5 balanced meals per day plus snacks.");
  } else {
    diet.push("Aim to maintain calories. Focus on balanced macros: sufficient protein, moderate carbs, and healthy fats.");
    diet.push("Monitor energy levels and adjust portions around training days.");
  }

  diet.push("Sample meal ideas: Breakfast - oats + yogurt + berries; Lunch - grilled chicken, quinoa, salad; Dinner - salmon, sweet potato, veggies.");
  diet.push("Hydration: 2-3L water/day (adjust for sweat). Prioritize sleep 7-9 hours for recovery.");

  return diet;
}

export default function AISuggestions(): JSX.Element {
  const [goal, setGoal] = useState<Goal>("maintain");
  const [days, setDays] = useState<number>(3);
  const [workoutSuggestions, setWorkoutSuggestions] = useState<string[]>([]);
  const [dietSuggestions, setDietSuggestions] = useState<string[]>([]);
  const [generatedAt, setGeneratedAt] = useState<number | null>(null);

  const handleGenerate = () => {
    const w = generateWorkout(goal, days);
    const d = generateDiet(goal);
    setWorkoutSuggestions(w);
    setDietSuggestions(d);
    setGeneratedAt(Date.now());
  };

  return (
    <section className="mb-6">
      <div className="rounded-lg border p-4 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">AI Suggestions</h2>
          <small className="text-sm text-muted-foreground">Quick generated plans</small>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium mb-1">Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value as Goal)}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="lose">Lose weight</option>
              <option value="maintain">Maintain</option>
              <option value="gain">Gain muscle</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Days / week</label>
            <input
              type="number"
              min={1}
              max={7}
              value={days}
              onChange={(e) => setDays(Math.max(1, Math.min(7, Number(e.target.value))))}
              className="w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="flex items-end">
            <button
              type="button"
              onClick={handleGenerate}
              className="w-full rounded-md bg-black text-white px-4 py-2 font-semibold"
            >
              Generate
            </button>
          </div>
        </div>

        {generatedAt && (
          <div className="text-xs text-muted-foreground mb-3">Generated at: {new Date(generatedAt).toLocaleString()}</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">Workout Suggestions</h3>
            <ul className="list-disc pl-5 space-y-2">
              {workoutSuggestions.length === 0 ? (
                <li className="text-sm text-muted-foreground">No suggestions yet — click Generate.</li>
              ) : (
                workoutSuggestions.map((s, i) => (
                  <li key={i} className="text-sm">{s}</li>
                ))
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Diet Suggestions</h3>
            <ul className="list-disc pl-5 space-y-2">
              {dietSuggestions.length === 0 ? (
                <li className="text-sm text-muted-foreground">No suggestions yet — click Generate.</li>
              ) : (
                dietSuggestions.map((s, i) => (
                  <li key={i} className="text-sm">{s}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
