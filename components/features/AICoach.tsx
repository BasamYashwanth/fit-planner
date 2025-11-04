"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AICoach() {
  const [recommendations] = useState([
    {
      type: "Workout",
      content: "Based on your progress, try increasing your weight for bench press by 5kg today.",
      confidence: 85
    },
    {
      type: "Diet",
      content: "Your protein intake is low. Consider adding a protein shake after workouts.",
      confidence: 92
    },
    {
      type: "Recovery",
      content: "Your sleep pattern suggests you need more rest. Aim for 7-8 hours tonight.",
      confidence: 78
    }
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Smart Coach</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{rec.type} Recommendation</h3>
                    <p className="text-sm text-gray-600 mt-1">{rec.content}</p>
                  </div>
                  <span className="text-sm text-gray-500">{rec.confidence}% confidence</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm">Follow</Button>
                  <Button variant="ghost" size="sm">Ignore</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button className="w-full">Get More Recommendations</Button>
        </div>
      </CardContent>
    </Card>
  );
}