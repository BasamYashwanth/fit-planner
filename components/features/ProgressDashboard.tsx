"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from "react";

const data = [
  { date: '1/1', weight: 80 },
  { date: '2/1', weight: 79.5 },
  { date: '3/1', weight: 79 },
  { date: '4/1', weight: 78.8 },
  { date: '5/1', weight: 78.2 },
];

export default function ProgressDashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="w-full overflow-x-auto">
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Weight Loss</h3>
                <p className="text-2xl font-bold text-green-500">-1.8 kg</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Workouts</h3>
                <p className="text-2xl font-bold">12</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Calories Burned</h3>
                <p className="text-2xl font-bold">8,500</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Streak</h3>
                <p className="text-2xl font-bold">5 days</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}