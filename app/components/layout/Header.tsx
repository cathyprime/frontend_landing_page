'use client'
import React, { useState } from 'react'

interface MenuItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems: MenuItem[] = [
    { name: 'O nas', href: '#about' },
    { name: 'Usługi', href: '#features' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ]

  return (
    <>
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo i hasło */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Logo</div>
              <div className="hidden md:block ml-4 text-sm text-gray-600">
                Twoje hasło marketingowe
              </div>
            </div>

            {/* Menu na desktop */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Przycisk menu mobilnego */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu mobilne */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              {menuItems.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
