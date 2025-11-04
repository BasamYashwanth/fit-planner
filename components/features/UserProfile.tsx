"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    fitnessGoal: "",
    targetWeight: ""
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile & Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input 
              placeholder="Name" 
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
            />
            <Input 
              placeholder="Age" 
              type="number"
              value={profile.age}
              onChange={(e) => setProfile({...profile, age: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input 
              placeholder="Height (cm)" 
              type="number"
              value={profile.height}
              onChange={(e) => setProfile({...profile, height: e.target.value})}
            />
            <Input 
              placeholder="Weight (kg)" 
              type="number"
              value={profile.weight}
              onChange={(e) => setProfile({...profile, weight: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input 
              placeholder="Fitness Goal" 
              value={profile.fitnessGoal}
              onChange={(e) => setProfile({...profile, fitnessGoal: e.target.value})}
            />
            <Input 
              placeholder="Target Weight (kg)" 
              type="number"
              value={profile.targetWeight}
              onChange={(e) => setProfile({...profile, targetWeight: e.target.value})}
            />
          </div>
          <Button className="w-full">Save Profile</Button>
        </div>
      </CardContent>
    </Card>
  );
}