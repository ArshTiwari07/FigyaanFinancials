import { motion } from "framer-motion";
import Image from "next/image";

// If shadcn/ui is not set up, replace these with simple div/button components
// or install shadcn/ui properly. For now, I'll define fallback components.
const Card = ({ children, className }) => (
  <div className={`rounded-2xl border shadow ${className}`}>{children}</div>
);
const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);
const Button = ({ children, className }) => (
  <button className={className}>{children}</button>
);

export default function FigyaanLanding() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#d4af37] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-[#d4af37]/20">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Figyaan Logo" width={50} height={50} />
          <h1 className="text-3xl font-bold tracking-wide">FIGYAAN</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#problem" className="hover:text-white transition">Problem</a>
          <a href="#personalize" className="hover:text-white transition">Personalization</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6"
        >
          Master Your Finances with FIGYAAN
        </motion.h2>
        <p className="text-lg text-[#d4af37]/80 max-w-2xl mb-6">
          A platform that makes people financially literate by teaching terms,
          budgeting, investing, portfolio diversification, and compounding.
        </p>
        <Button className="bg-[#d4af37] text-black px-6 py-3 rounded-2xl shadow-lg hover:bg-white hover:text-black transition">
          Get Started
        </Button>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-16 grid md:grid-cols-3 gap-8">
        {[
          "Teaches all the terms",
          "Teaches budgeting",
          "Teaches investing",
          "Portfolio diversification",
          "Teaches compounding",
        ].map((feature, i) => (
          <Card key={i} className="bg-[#1a1a1a] border-[#d4af37]/20 shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Problem Statement */}
      <section id="problem" className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
        <ul className="list-disc list-inside space-y-2 text-[#d4af37]/80">
          <li>Lack of financial education access</li>
          <li>Complexity of financial concepts</li>
          <li>Risky information & scams</li>
          <li>Behavioral barriers & poor money management</li>
          <li>Debt & casual spending habits</li>
          <li>Lack of trust & poor credit management</li>
          <li>Limited access to financial institutions</li>
          <li>Cultural & social pressure</li>
        </ul>
      </section>

      {/* Personalization */}
      <section id="personalize" className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-6">Personalized Experience</h2>
        <p className="text-[#d4af37]/80 max-w-3xl mb-4">
          Figyaan personalizes financial guidance by collecting user information
          like income, expenses, savings sources, and goals.
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#d4af37]/80">
          <li>Advising using AI</li>
          <li>Giving all investment options</li>
          <li>Advice based on current situation</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#d4af37]/20 text-[#d4af37]/60">
        © {new Date().getFullYear()} Figyaan. All rights reserved.
      </footer>
    </div>
  );
}
