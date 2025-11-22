import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744551472900-d23f4997e1cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWFkbGlmdCUyMHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzODQ2MDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Strength training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/90 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Zacznij Swoją Transformację Dzisiaj
            </h2>
            <p className="text-gray-300 mb-8">
              Dołącz do setek zadowolonych członków, którzy już osiągnęli swoje cele fitness w DickFit. Pierwsza sesja próbna całkowicie za darmo!
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 group">
              Umów Zajęcia Próbne
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Adres</h3>
                  <p className="text-gray-300">ul. Mięśniowa 42, 00-001 Warszawa</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Telefon</h3>
                  <p className="text-gray-300">+48 123 456 789</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Email</h3>
                  <p className="text-gray-300">kontakt@dickfit.pl</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
