import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-stone-500/30">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-serif text-2xl tracking-widest uppercase">Vane</span>
        <div className="space-x-8 text-sm uppercase tracking-tighter text-stone-400">
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-stone-500 uppercase tracking-widest text-sm mb-4">Principal Architect of Sales</h2>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
            Julian <br /> <span className="italic text-stone-400">Vane</span>
          </h1>
          <p className="max-w-md text-stone-400 text-lg leading-relaxed mb-10">
            Curating lifestyles for the architectural connoisseur. Precision-driven luxury real estate in the heart of Austin.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-none px-10 bg-stone-100 text-black hover:bg-stone-300">
              View Collection
            </Button>
            <Button size="lg" variant="outline" className="rounded-none px-10 border-stone-800 hover:bg-stone-900">
              Inquire
            </Button>
          </div>
        </div>

        {/* Hero Image - Using a placeholder for now */}
        <div className="relative aspect-[4/5] bg-stone-900 overflow-hidden border border-stone-800">
          <img 
            src="https://images.unsplash.com/photo-1600607687940-47a0f9259d17?auto=format&fit=crop&q=80" 
            alt="Luxury Architecture"
            className="object-cover w-full h-full opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </main>
    </div>
  )
}

export default App