import { ImageWithFallback } from "./figma/ImageWithFallback";

const images = [
  { url: "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?auto=format&fit=crop&w=1080&q=80", alt: "Gym weights" },
  { url: "https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?auto=format&fit=crop&w=1080&q=80", alt: "Personal trainer" },
  { url: "https://images.unsplash.com/photo-1758957646695-ec8bce3df462?auto=format&fit=crop&w=1080&q=80", alt: "Modern gym equipment" },
  { url: "https://images.unsplash.com/photo-1756314355428-c92dab469b39?auto=format&fit=crop&w=1080&q=80", alt: "Gym interior" },
  { url: "https://images.unsplash.com/photo-1744551472900-d23f4997e1cd?auto=format&fit=crop&w=1080&q=80", alt: "Deadlift training" },
  { url: "https://images.unsplash.com/photo-1759300642026-3f8ded9a9196?auto=format&fit=crop&w=1080&q=80", alt: "Athlete training" },
];

export function Gallery() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">Nasza Przestrzeń</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Zobacz naszą profesjonalną siłownię wyposażoną w najnowocześniejszy sprzęt</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl aspect-square">
              <ImageWithFallback src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}