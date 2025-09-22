import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, Award, Target } from "lucide-react"

const progressStats = [
  {
    label: "Weekly Goal",
    value: 75,
    current: "3 of 4 workouts",
    icon: Target,
  },
  {
    label: "Strength Progress",
    value: 85,
    current: "+15% this month",
    icon: TrendingUp,
  },
  {
    label: "Consistency",
    value: 92,
    current: "23 day streak",
    icon: Calendar,
  },
]

const achievements = [
  { title: "First Week Complete", date: "2 days ago", type: "milestone" },
  { title: "Personal Best: Bench Press", date: "5 days ago", type: "record" },
  { title: "30-Day Streak", date: "1 week ago", type: "streak" },
]

export function ProgressTracker() {
  return (
    <section id="progress" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">TRACK YOUR PROGRESS</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Monitor your fitness journey with detailed analytics and celebrate your achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {progressStats.map((stat, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                      <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold">{stat.value}%</div>
                      <Progress value={stat.value} className="h-2" />
                      <p className="text-sm text-muted-foreground">{stat.current}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Weekly Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">📈</div>
                    <p>Performance chart would go here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
