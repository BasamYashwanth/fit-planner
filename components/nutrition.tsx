"use client";

import { MealTracker } from "./features/MealTracker";

export default function Nutrition() {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Nutrition Tracking</h2>
      <MealTracker />
    </section>
  );
}