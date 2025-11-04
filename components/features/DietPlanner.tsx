"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function DietPlanner() {
  const [dailyStats, setDailyStats] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
    water: 0
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diet & Nutrition Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Calories</h3>
                <Progress value={60} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">1200/2000 kcal</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Water Intake</h3>
                <Progress value={40} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">1.2/3.0 L</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Protein</h3>
                <Progress value={75} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">90/120g</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Carbs</h3>
                <Progress value={50} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">150/300g</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Fats</h3>
                <Progress value={30} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">30/70g</p>
              </CardContent>
            </Card>
          </div>
          <Button className="w-full">Add Meal</Button>
        </div>
      </CardContent>
    </Card>
  );
}