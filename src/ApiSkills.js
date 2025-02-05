import React from "react";

const skills = {
  "Database Technologies": [
    { name: "SQL (MySQL, PostgreSQL)", icon: "💾", level: "Pro" },
    { name: "NoSQL (MongoDB)", icon: "🔒", level: "Avancé" },
    { name: "Oracle SQL", icon: "🗄️", level: "Intermédiaire" },
    { name: "Firebase", icon: "🔥", level: "Avancé" },
  ],
  "API and Integration Skills": [
    { name: "Express.js (REST APIs)", icon: "🌐", level: "Pro" },
    { name: "Flask (REST APIs)", icon: "⚙️", level: "Avancé" },
    { name: "Firebase (Real-time Database APIs)", icon: "🔗", level: "Intermédiaire" },
    { name: "MongoDB (API Integration)", icon: "📡", level: "Avancé" },
  ],
  "Version Control": [
    { name: "Git (GitHub, GitLab, Bitbucket)", icon: "🔧", level: "Pro" },
  ],
};

const levelStyles = {
  "Pro": "bg-green-500/90 text-green-100",
  "Avancé": "bg-blue-500/90 text-blue-100",
  "Intermédiaire": "bg-yellow-500/90 text-yellow-100",
  "Débutant": "bg-red-500/90 text-red-100",
};

const Apiskills = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-semibold text-blue-400 mb-8 text-center">
              {category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 transition-all hover:transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-lg font-medium pl-2 text-gray-200">
                      {skill.icon}
                    </span>
                    <span
                      className={`${levelStyles[skill.level]} text-xs font-semibold px-3 py-1 pl-2 rounded-full`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 bg-gray-700 rounded-full">
                      <div
                        className={`${levelStyles[skill.level]} h-2 rounded-full transition-all duration-500 ${
                          skill.level === "Pro"
                            ? "w-full"
                            : skill.level === "Avancé"
                            ? "w-3/4"
                            : skill.level === "Intermédiaire"
                            ? "w-1/2"
                            : "w-1/4"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {Object.entries(levelStyles).map(([level, style]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`${style} w-3 h-3 rounded-full`} />
              <span className="text-gray-300 text-sm">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apiskills;
