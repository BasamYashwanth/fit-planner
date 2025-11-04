"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save, Edit2, Trash2 } from "lucide-react"
import { toast } from "sonner"

interface NutritionSection {
  id: string;
  title: string;
  content: string;
  isEditing: boolean;
}

interface DailyIntake {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  water: number;
}

const NutritionDetails: React.FC = () => {
  const [sections, setSections] = useState<NutritionSection[]>([
    { id: '1', title: 'Daily Goals', content: 'Set your daily nutrition goals here.', isEditing: false },
    { id: '2', title: 'Macronutrients', content: 'Track your daily macronutrients:\n- Carbohydrates\n- Proteins\n- Fats', isEditing: false },
    { id: '3', title: 'Meal Plan', content: 'Plan your daily meals here.', isEditing: false },
  ]);

  const [dailyIntake, setDailyIntake] = useState<DailyIntake>({
    calories: 2000,
    protein: 150,
    carbs: 250,
    fats: 65,
    water: 2.5,
  });

  const handleSectionEdit = (id: string) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, isEditing: true } : section
    ));
  };

  const handleSectionSave = (id: string, newTitle: string, newContent: string) => {
    setSections(sections.map(section =>
      section.id === id ? { ...section, title: newTitle, content: newContent, isEditing: false } : section
    ));
    toast.success('Changes saved successfully');
  };

  const handleSectionDelete = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
    toast.info('Section deleted');
  };

  const addNewSection = () => {
    const newSection = {
      id: Date.now().toString(),
      title: 'New Section',
      content: 'Add your content here',
      isEditing: true,
    };
    setSections([...sections, newSection]);
  };

  const updateDailyIntake = (key: keyof DailyIntake, value: number) => {
    setDailyIntake(prev => ({ ...prev, [key]: value }));
    toast.success(`${key.charAt(0).toUpperCase() + key.slice(1)} updated`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Nutrition Tracker</h2>

      {/* Daily Intake Tracker */}
      <Card className="p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Daily Nutrition Tracker</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Calories</label>
            <Input
              type="number"
              value={dailyIntake.calories}
              onChange={(e) => updateDailyIntake('calories', parseFloat(e.target.value))}
              min="0"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Protein (g)</label>
            <Input
              type="number"
              value={dailyIntake.protein}
              onChange={(e) => updateDailyIntake('protein', parseFloat(e.target.value))}
              min="0"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Carbs (g)</label>
            <Input
              type="number"
              value={dailyIntake.carbs}
              onChange={(e) => updateDailyIntake('carbs', parseFloat(e.target.value))}
              min="0"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Fats (g)</label>
            <Input
              type="number"
              value={dailyIntake.fats}
              onChange={(e) => updateDailyIntake('fats', parseFloat(e.target.value))}
              min="0"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Water (L)</label>
            <Input
              type="number"
              value={dailyIntake.water}
              onChange={(e) => updateDailyIntake('water', parseFloat(e.target.value))}
              min="0"
              step="0.1"
              className="w-full"
            />
          </div>
        </div>
      </Card>

      {/* Custom Nutrition Sections */}
      <div className="space-y-6">
        {sections.map((section) => (
          <Card key={section.id} className="p-6">
            {section.isEditing ? (
              <>
                <Input
                  className="text-xl font-semibold mb-2"
                  defaultValue={section.title}
                  onBlur={(e) => handleSectionSave(section.id, e.target.value, section.content)}
                />
                <Textarea
                  className="min-h-[100px] mb-4"
                  defaultValue={section.content}
                  onBlur={(e) => handleSectionSave(section.id, section.title, e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleSectionDelete(section.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleSectionSave(section.id, section.title, section.content)}
                  >
                    <Save className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSectionEdit(section.id)}
                  >
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
                <p className="whitespace-pre-wrap">{section.content}</p>
              </>
            )}
          </Card>
        ))}
      </div>

      {/* Add New Section Button */}
      <Button
        className="mt-6 w-full"
        variant="outline"
        onClick={addNewSection}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add New Section
      </Button>
    </div>
  );
};

export default NutritionDetails;