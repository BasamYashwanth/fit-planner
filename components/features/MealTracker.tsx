"use client"
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Meal {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface NutritionGoals {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  water: number;
}

export function MealTracker() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [waterIntake, setWaterIntake] = useState(0);
  const [showAddMeal, setShowAddMeal] = useState(false);
  const [newMeal, setNewMeal] = useState<Meal>({
    id: "",
    name: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  });

  const goals: NutritionGoals = {
    calories: 2000,
    protein: 120,
    carbs: 300,
    fats: 65,
    water: 3.0,
  };

  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fats: acc.fats + meal.fats,
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  const handleAddMeal = () => {
    if (!newMeal.name) {
      toast.error("Please enter a meal name");
      return;
    }
    setMeals([...meals, { ...newMeal, id: Date.now().toString() }]);
    setNewMeal({ id: "", name: "", calories: 0, protein: 0, carbs: 0, fats: 0 });
    setShowAddMeal(false);
    toast.success("Meal added successfully");
  };

  const handleDeleteMeal = (id: string) => {
    setMeals(meals.filter((meal) => meal.id !== id));
    toast.info("Meal removed");
  };

  const addWater = () => {
    if (waterIntake < goals.water) {
      setWaterIntake(prev => Math.min(prev + 0.2, goals.water));
      toast.success("Water intake updated");
    }
  };

  const NutrientProgress = ({ current, goal, label, unit }: { current: number; goal: number; label: string; unit: string }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">
          {current.toFixed(1)}/{goal} {unit}
        </span>
      </div>
      <Progress value={(current / goal) * 100} />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Nutrition Progress */}
      <Card className="p-6">
        <div className="grid gap-4">
          <NutrientProgress 
            current={totals.calories} 
            goal={goals.calories} 
            label="Calories" 
            unit="kcal" 
          />
          <NutrientProgress 
            current={waterIntake} 
            goal={goals.water} 
            label="Water Intake" 
            unit="L" 
          />
          <NutrientProgress 
            current={totals.protein} 
            goal={goals.protein} 
            label="Protein" 
            unit="g" 
          />
          <NutrientProgress 
            current={totals.carbs} 
            goal={goals.carbs} 
            label="Carbs" 
            unit="g" 
          />
          <NutrientProgress 
            current={totals.fats} 
            goal={goals.fats} 
            label="Fats" 
            unit="g" 
          />
          <Button variant="outline" onClick={addWater} className="mt-2">
            Add 200ml Water
          </Button>
        </div>
      </Card>

      {/* Meals List */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Today's Meals</h3>
          <Button onClick={() => setShowAddMeal(true)} variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Meal
          </Button>
        </div>

        {showAddMeal && (
          <div className="space-y-4 mb-6 p-4 border rounded-lg">
            <Input
              placeholder="Meal name"
              value={newMeal.name}
              onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Input
                  type="number"
                  placeholder="Calories"
                  value={newMeal.calories || ""}
                  onChange={(e) => setNewMeal({ ...newMeal, calories: Number(e.target.value) })}
                />
                <span className="text-xs text-muted-foreground">kcal</span>
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Protein"
                  value={newMeal.protein || ""}
                  onChange={(e) => setNewMeal({ ...newMeal, protein: Number(e.target.value) })}
                />
                <span className="text-xs text-muted-foreground">g</span>
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Carbs"
                  value={newMeal.carbs || ""}
                  onChange={(e) => setNewMeal({ ...newMeal, carbs: Number(e.target.value) })}
                />
                <span className="text-xs text-muted-foreground">g</span>
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Fats"
                  value={newMeal.fats || ""}
                  onChange={(e) => setNewMeal({ ...newMeal, fats: Number(e.target.value) })}
                />
                <span className="text-xs text-muted-foreground">g</span>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddMeal(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddMeal}>
                Add Meal
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {meals.map((meal) => (
            <div key={meal.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-medium">{meal.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {meal.calories} kcal · {meal.protein}g protein · {meal.carbs}g carbs · {meal.fats}g fats
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteMeal(meal.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {meals.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No meals added yet. Start by adding your first meal!
            </p>
          )}
        </div>
      </Card>
    </div>
  );
}