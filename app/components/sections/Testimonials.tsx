'use client'
import React from 'react'

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
  company?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Niesamowite doświadczenie współpracy. Zespół jest profesjonalny i zawsze pomocny. Polecam każdemu, kto szuka wysokiej jakości usług.",
      author: "Jan Kowalski",
      role: "CEO",
      company: "Tech Solutions",
      image: "/placeholder.jpg" // Placeholder na zdjęcie
    },
    {
      content: "Współpraca przebiegła sprawnie i bezproblemowo. Efekty przerosły nasze oczekiwania. Na pewno będziemy kontynuować współpracę.",
      author: "Anna Nowak",
      role: "Marketing Manager",
      company: "Creative Studio",
      image: "/placeholder.jpg"
    },
    {
      content: "Profesjonalne podejście i świetna komunikacja. Zespół rozumie potrzeby klienta i proponuje optymalne rozwiązania.",
      author: "Piotr Wiśniewski",
      role: "Product Owner",
      company: "Digital Agency",
      image: "/placeholder.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Co mówią o nas klienci</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zobacz, co sądzą o nas osoby, które już nam zaufały i skorzystały z naszych usług.
          </p>
        </div>

        {/* Grid z opiniami */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all"
            >
              {/* Cudzysłów jako ikona */}
              <div className="text-4xl text-blue-600 mb-4">"</div>
              
              {/* Treść opinii */}
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              
              {/* Autor opinii */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.company && ` @ ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
