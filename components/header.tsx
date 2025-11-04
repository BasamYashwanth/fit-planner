import { Button } from "@/components/ui/button"
import { Menu, User, Settings } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FP</span>
            </div>
            <span className="font-bold text-xl">FitPlanner</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#workouts" className="text-sm font-medium hover:text-primary transition-colors">
              Workouts
            </a>
            <a href="#progress" className="text-sm font-medium hover:text-primary transition-colors">
              Progress
            </a>
            <a href="#exercises" className="text-sm font-medium hover:text-primary transition-colors">
              Exercises
            </a>
            <div className="flex items-center gap-3">
              <Link href="/nutrition" className="text-sm font-medium hover:text-primary transition-colors">
                Nutrition
              </Link>
              <Link href="/dashboard#ai-suggestions" className="text-xs text-slate-500 hover:text-primary transition-colors">
                AI Suggestions
              </Link>
            </div>
            <a href="/login" className="text-sm font-medium text-blue-600 hover:underline transition-colors">
              Login
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
