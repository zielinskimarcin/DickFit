import { Button } from "./ui/button";
import { ArrowRight, Dumbbell } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1759300642026-3f8ded9a9196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhciUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjM4MDYyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Athlete training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-purple-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8">
          <Dumbbell className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300">Profesjonalny Trening Siłowy</span>
        </div>

        <h1 className="mb-6 text-white">
          <span className="block text-6xl md:text-8xl bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            DickFit
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-purple-200 mb-4 max-w-3xl mx-auto">
          Trening siłowy wydłuża przyrodzenie
        </p>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Dołącz do najbardziej prestiżowej siłowni w mieście. Profesjonalne wyposażenie, doświadczeni trenerzy i społeczność, która wspiera Twój rozwój.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 group">
            Rozpocznij Trening
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 backdrop-blur-sm">
            Zobacz Cennik
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl text-purple-400 mb-2">500+</div>
            <div className="text-gray-300">Członków</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Trenerów</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">Dostęp</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-4xl text-purple-400 mb-2">300m²</div>
            <div className="text-gray-300">Przestrzeń</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
