'use client'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Tekst i CTA */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Twoja Unikalna
            <span className="text-blue-600"> Propozycja Wartości</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Krótki, przekonujący opis tego, co oferujesz i jak to pomaga Twoim klientom.
            Skup się na głównych korzyściach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Rozpocznij
            </button>
            <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Dowiedz się więcej
            </button>
          </div>
        </div>

        {/* Obraz/Ilustracja */}
        <div className="lg:w-1/2">
          <div className="relative">
            {/* Placeholder dla obrazu - zastąp src właściwym obrazem */}
            <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
              Miejsce na grafikę
            </div>
            {/* Dekoracyjne elementy */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
