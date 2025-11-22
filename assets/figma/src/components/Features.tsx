import { Dumbbell, Users, Trophy, Clock, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Profesjonalny Sprzęt",
    description: "Najnowocześniejsze maszyny i wolne ciężary od światowych producentów",
  },
  {
    icon: Users,
    title: "Doświadczeni Trenerzy",
    description: "Certyfikowani specjaliści gotowi pomóc Ci osiągnąć cele",
  },
  {
    icon: Trophy,
    title: "Programy Treningowe",
    description: "Spersonalizowane plany treningowe dostosowane do Twoich potrzeb",
  },
  {
    icon: Clock,
    title: "Dostęp 24/7",
    description: "Trenuj kiedy chcesz - siłownia otwarta całą dobę",
  },
  {
    icon: Heart,
    title: "Strefa Cardio",
    description: "Nowoczesne bieżnie, rowery i eliptyki dla pełnego treningu",
  },
  {
    icon: Zap,
    title: "Energia i Motywacja",
    description: "Społeczność, która popycha Cię do przodu każdego dnia",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Dlaczego <span className="text-purple-400">DickFit</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferujemy wszystko, czego potrzebujesz do osiągnięcia swoich celów fitness i zbudowania silnego ciała
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors">
                <feature.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
