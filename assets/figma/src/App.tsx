import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Gallery } from "./components/Gallery";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
