import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best coffee machine for home use in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Breville Barista Touch Impress is currently our top recommendation for most home enthusiasts."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a separate grinder for my coffee machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many premium espresso machines include high-quality integrated grinders, but a separate burr grinder often provides more consistency."
        }
      },
      {
        "@type": "Question",
        "name": "Are automatic coffee machines better than manual ones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Automatic machines offer consistency and speed, while manual machines provide complete control for the home barista."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I descale my coffee machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend descaling every 3-4 months to maintain machine longevity and coffee taste."
        }
      },
      {
        "@type": "Question",
        "name": "Should I buy an espresso machine or a drip coffee maker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose drip for convenience and large batches, and espresso for concentrated shots and milk-based drinks."
        }
      },
      {
        "@type": "Question",
        "name": "Are coffee pods and capsules environmentally friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many brands offer recycling programs, but ground coffee is generally the more eco-friendly choice."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'Gold Cup Standard' in coffee brewing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a certification for brewers that maintain precise water temperature and extraction times."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a high-quality coffee machine last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A premium espresso machine can last 10-15 years with proper maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use hot water from my coffee machine for other drinks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, many modern machines feature a dedicated hot water dispenser for tea or oatmeal."
        }
      },
      {
        "@type": "Question",
        "name": "Does the price of a coffee machine guarantee better taste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Price often means better thermal stability, but bean quality and grind freshness are equally critical."
        }
      }
    ]
  };

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <Hero />

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-brown mb-4">
              Best Coffee Machines of 2025
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-matte-black/60 max-w-2xl mx-auto font-sans">
              Our experts have tested dozens of models to bring you this curated selection of the finest coffee machines available today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} featured={index === 0} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/best-coffee-machines"
              className="inline-block text-coffee-brown font-bold tracking-widest border-b-2 border-gold pb-1 hover:text-gold transition-colors"
            >
              BROWSE ALL TOP PICKS →
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section Shortcut */}
      <section className="py-24 bg-cream/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-coffee-brown mb-6">
                Not sure which one <br /> is right for you?
              </h2>
              <p className="text-matte-black/70 mb-8 leading-relaxed">
                Choosing a coffee machine is a personal decision. Whether you value speed, precision, or aesthetics, our clinical comparison guide helps you weigh the features that matter most to your morning routine.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs">✓</div>
                  <span className="text-sm font-medium">Side-by-side technical specs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs">✓</div>
                  <span className="text-sm font-medium">Capacity & dimensions comparison</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs">✓</div>
                  <span className="text-sm font-medium">Price range analysis</span>
                </div>
              </div>
              <Link
                href="/comparison"
                className="gold-button px-10 py-5 rounded-full text-sm font-bold tracking-widest inline-block"
              >
                COMPARE ALL MODELS
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/10 rounded-2xl blur-2xl"></div>
              <ComparisonTable />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-coffee-brown mb-4">
              Common Questions
            </h2>
            <p className="text-matte-black/60 font-sans">
              Find quick answers to the most frequent coffee machine inquiries.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      <Footer />
    </main>
  );
}
