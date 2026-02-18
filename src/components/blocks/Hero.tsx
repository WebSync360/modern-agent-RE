import { JULIAN_VANE } from "../../data/mockData";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-vane-dark">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687940-477a63739931?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vane-dark via-transparent to-vane-dark/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 mx-auto text-center">
        <span className="inline-block mb-4 text-sm font-medium tracking-[0.3em] uppercase text-vane-accent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {JULIAN_VANE.title}
        </span>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] text-vane-paper max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Elevating the <br /> 
          <span className="italic">Standard of Living</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-vane-paper/70 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          {JULIAN_VANE.bio}
        </p>

        <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
          <button className="group relative px-8 py-4 bg-vane-accent text-vane-dark font-semibold overflow-hidden transition-all duration-300 hover:bg-vane-gold">
            <span className="relative z-10 uppercase tracking-widest text-xs">View Collection</span>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/20" />
          </button>
        </div>
      </div>

      {/* Architectural Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-20 bg-gradient-to-b from-vane-accent to-transparent" />
      </div>
    </section>
  );
};

export default Hero;