"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Community() {
  const [challenges] = useState([
    {
      title: "30 Days Push-up Challenge",
      participants: 245,
      daysLeft: 12,
      reward: "500 points"
    },
    {
      title: "Weight Loss Challenge",
      participants: 189,
      daysLeft: 20,
      reward: "1000 points"
    }
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Community & Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <div className="mt-2 space-y-1 text-sm text-gray-500">
                    <p>👥 {challenge.participants} participants</p>
                    <p>⏳ {challenge.daysLeft} days left</p>
                    <p>🏆 {challenge.reward}</p>
                  </div>
                  <Button className="mt-3 w-full">Join Challenge</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Leaderboard</h3>
              <div className="space-y-2">
                {[1, 2, 3].map((position) => (
                  <div key={position} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{position}</span>
                      <span>User {position}</span>
                    </div>
                    <span className="text-sm text-gray-500">{1000 - position * 100} points</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}