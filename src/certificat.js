import React from "react";

const Python = require("./assets/python.jpg");
const SQL = require("./assets/SQL.png");
const programmtion = require("./assets/prog.jpg");

const certificat = [
    {
        Namecertificat: 'Python Programmer Bootcamp',
        Intro: '365datascience.',
        logo: Python,
        view: 'https://learn.365datascience.com/certificates/CC-E31C050893/'
    },
    {
        Namecertificat: 'SQL',
        Intro: '365datascience.',
        logo: SQL,
        view: 'https://learn.365datascience.com/certificates/CC-805F57B1FB/'
    },
    {
        Namecertificat: 'Logique et Programmation',
        Intro: 'Cursa.',
        logo: programmtion,
        view: 'https://www.linkedin.com/in/hamza-ben-sassi-b225a2317/details/certifications/1730799566447/single-media-viewer/?profileId=ACoAAFBa6coBavCn3GGrRdlHNUAs4NO8cbPoxpU'
    }
];

const Certificat = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificat.map((element, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 space-y-6">
                    <img src={element.logo} alt={element.Namecertificat} className="w-32 h-32 object-contain mx-auto mb-4" />
                    <h3 className="text-4xl text-white font-bold mt-2">{element.Namecertificat}</h3>
                    <p className="text-white">{element.Intro}</p>
                    <div className="justifty-end">
                    <a href={element.view} target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-gray-800 hover:bg-gray-700 rounded p-4 w-full  transition-colors duration-300">
                        View Certificate
                    </a>

                    </div>
                  
                </div>
            ))}
        </div>
    );
};

export default Certificat;
