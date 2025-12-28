import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-1 mb-2">
        <span>Made with</span>
        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
        <span>by Dominik Koch</span>
      </div>
      <div className="text-xs opacity-60">
        Inspired by <a href="#" className="underline hover:text-foreground transition-colors">Ahmet Kilinc</a>
      </div>
    </footer>
  )
}
