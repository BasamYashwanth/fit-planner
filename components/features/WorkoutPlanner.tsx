"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function WorkoutPlanner() {
  const [workout, setWorkout] = useState({
    name: "",
    type: "",
    duration: "",
    exercises: []
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Workout Planner & Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input 
            placeholder="Workout Name" 
            value={workout.name}
            onChange={(e) => setWorkout({...workout, name: e.target.value})}
          />
          <Select onValueChange={(value) => setWorkout({...workout, type: value})}>
            <SelectTrigger>
              <SelectValue placeholder="Workout Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="strength">Strength Training</SelectItem>
              <SelectItem value="cardio">Cardio</SelectItem>
              <SelectItem value="hiit">HIIT</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
            </SelectContent>
          </Select>
          <Input 
            placeholder="Duration (minutes)" 
            type="number"
            value={workout.duration}
            onChange={(e) => setWorkout({...workout, duration: e.target.value})}
          />
          <Button className="w-full">Create Workout</Button>
        </div>
      </CardContent>
    </Card>
  );
}