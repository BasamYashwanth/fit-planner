"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ExerciseLibrary() {
  const [exercises] = useState([
    {
      name: "Push-ups",
      category: "Bodyweight",
      difficulty: "Beginner",
      videoUrl: "https://example.com/pushup-video",
      muscles: ["Chest", "Shoulders", "Triceps"]
    },
    // Add more exercises here
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exercise Library</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Search exercises..." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{exercise.name}</h3>
                  <p className="text-sm text-gray-500">{exercise.category}</p>
                  <p className="text-sm text-gray-500">Difficulty: {exercise.difficulty}</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm">Watch Video</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}