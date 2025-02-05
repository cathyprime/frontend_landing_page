"use client";
import React, { useState, useMemo } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags?: string[];
  date: string;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Projekt 1",
        category: "web",
        description: "Opis przykładowego projektu webowego",
        image: "/placeholder1.jpg",
        tags: ["React", "TypeScript", "Tailwind"],
        date: "2024-01",
      },
      {
        title: "Projekt 2",
        category: "mobile",
        description: "Opis aplikacji mobilnej",
        image: "/placeholder2.jpg",
        tags: ["React Native", "Firebase"],
        date: "2024-02",
      },
      {
        title: "Projekt 3",
        category: "design",
        description: "Opis projektu graficznego",
        image: "/placeholder3.jpg",
        tags: ["Figma", "UI/UX"],
        date: "2024-02",
      },
      {
        title: "Projekt 4",
        category: "web",
        description: "Kolejny projekt webowy",
        image: "/placeholder4.jpg",
        tags: ["Next.js", "Prisma"],
        date: "2024-03",
      },
      {
        title: "Projekt 5",
        category: "mobile",
        description: "Następna aplikacja mobilna",
        image: "/placeholder5.jpg",
        tags: ["Flutter", "Firebase"],
        date: "2024-03",
      },
      {
        title: "Projekt 6",
        category: "design",
        description: "Projekt identyfikacji wizualnej",
        image: "/placeholder6.jpg",
        tags: ["Branding", "Logo"],
        date: "2024-03",
      },
    ],
    [],
  );

  // Memoizacja kategorii
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      projects.map((project) => project.category),
    );
    return ["all", ...Array.from(uniqueCategories)];
  }, [projects]);

  // Memoizacja filtrowanych projektów
  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  // Memoizacja statystyk kategorii
  const categoryStats = useMemo(() => {
    return projects.reduce(
      (acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
  }, [projects]);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Nagłówek sekcji */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nasze Projekty
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Zobacz przykłady naszych realizacji i przekonaj się o jakości
            naszych usług.
          </p>

          {/* Filtry kategorii */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors
${
  activeCategory === category
    ? "bg-blue-600 text-white"
    : "bg-white text-gray-600 hover:bg-gray-100"
}
${category !== "all" ? `relative` : ""}`}
              >
                {category}
                {category !== "all" && categoryStats[category] && (
                  <span className="ml-2 text-sm opacity-75">
                    ({categoryStats[category]})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Siatka projektów */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all"
            >
              {/* Placeholder na zdjęcie */}
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />

                {/* Opis projektu (widoczny po najechaniu) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-center mb-4">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/20 rounded-full text-white text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Zobacz więcej
                  </button>
                </div>
              </div>

              {/* Informacje o projekcie (widoczne zawsze) */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <p className="text-sm text-gray-600 capitalize">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
