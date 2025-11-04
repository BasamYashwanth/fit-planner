import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} FitPlanner</div>
        <nav className="flex flex-wrap items-center gap-4">
          <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <a href="#workouts" className="text-sm hover:text-primary transition-colors">Workouts</a>
          <a href="#progress" className="text-sm hover:text-primary transition-colors">Progress</a>
          <a href="#exercises" className="text-sm hover:text-primary transition-colors">Exercises</a>
          <Link href="/nutrition" className="text-sm font-medium text-blue-600 hover:underline transition-colors">Nutrition</Link>
          <Link href="/login" className="text-sm hover:text-primary transition-colors">Login</Link>
        </nav>
      </div>
    </footer>
  );
}
