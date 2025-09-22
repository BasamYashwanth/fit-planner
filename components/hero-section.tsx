import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Target, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      <div className="container relative px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                TRANSFORM YOUR
                <span className="block text-primary">FITNESS JOURNEY</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg text-pretty">
                Plan workouts, track progress, and achieve your fitness goals with our comprehensive training platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Start Training
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Programs
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm text-muted-foreground">Exercises</div>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Tracking</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
