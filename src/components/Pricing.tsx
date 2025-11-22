import { Button } from "./ui/button";
import { Check } from "lucide-react";

const plans = [
  { name: "Start", price: "149", period: "miesiąc", description: "Idealny dla początkujących",
    features: ["Dostęp do siłowni w godzinach 6-22","Podstawowy plan treningowy","Dostęp do strefy cardio","Aplikacja mobilna"], popular: false },
  { name: "Pro", price: "249", period: "miesiąc", description: "Najczęściej wybierany",
    features: ["Dostęp 24/7","Spersonalizowany plan treningowy","Konsultacje z trenerem (2x/m-c)","Dostęp do wszystkich stref","Suplementacja - 15% rabatu","Strefa relaksu i sauna"], popular: true },
  { name: "Elite", price: "449", period: "miesiąc", description: "Dla wymagających",
    features: ["Wszystko z planu Pro","Osobisty trener (8 sesji/m-c)","Plan żywieniowy","Analiza składu ciała","Priorytetowa rezerwacja","Bezpłatne zajęcia grupowe","Dostęp dla gościa (2x/m-c)"], popular: false },
];

export function Pricing() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Wybierz Swój Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Elastyczne opcje członkostwa dostosowane do Twoich potrzeb i budżetu</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative p-8 rounded-2xl border ${plan.popular ? "bg-gradient-to-br from-purple-900/30 to-gray-800/30 border-purple-500" : "bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700"}`}>
              {plan.popular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-600 text-white text-sm">Najpopularniejszy</div>)}
              <div className="mb-8">
                <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2"><span className="text-5xl text-white">{plan.price}</span><span className="text-gray-400">zł/{plan.period}</span></div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full py-6 ${plan.popular ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"}`}>Wybierz Plan</Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400">Nie jesteś pewien? Umów się na <span className="text-purple-400">bezpłatne zajęcia próbne</span></p>
        </div>
      </div>
    </section>
  );
}