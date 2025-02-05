"use client";
import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Pierwsza Funkcja",
      description:
        "Szczegółowy opis pierwszej funkcji i jej korzyści dla użytkownika. Koncentrujemy się na wartości.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Druga Funkcja",
      description:
        "Opis drugiej funkcji i jej znaczenia dla użytkownika. Podkreślamy praktyczne zastosowania.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Trzecia Funkcja",
      description:
        "Opis trzeciej funkcji i jej unikalnych zalet. Skupiamy się na tym, co wyróżnia nas na tle konkurencji.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze Funkcje</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odkryj wszystkie możliwości i korzyści, które oferujemy naszym
            klientom. Każda funkcja została zaprojektowana z myślą o Twoich
            potrzebach.
          </p>
        </div>

        {/* Grid z funkcjami */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
