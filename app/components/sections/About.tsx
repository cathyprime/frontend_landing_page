"use client";
import React from "react";

const About: React.FC = () => {
  const values = [
    {
      title: "Misja",
      description:
        "Nasza misja to dostarczanie innowacyjnych rozwiązań, które realnie wpływają na sukces naszych klientów.",
    },
    {
      title: "Wizja",
      description:
        "Dążymy do bycia liderem w branży, wyznaczając standardy jakości i innowacyjności.",
    },
    {
      title: "Wartości",
      description:
        "Stawiamy na profesjonalizm, uczciwość i ciągły rozwój, budując długotrwałe relacje z klientami.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O nas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jesteśmy zespołem pasjonatów, którzy łączą doświadczenie z
            innowacyjnym podejściem, aby dostarczać najlepsze rozwiązania dla
            naszych klientów.
          </p>
        </div>

        {/* Wartości firmy */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Zespół */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Nasz Zespół</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                <h4 className="text-lg font-semibold">Imię Nazwisko</h4>
                <p className="text-gray-600">Stanowisko</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
