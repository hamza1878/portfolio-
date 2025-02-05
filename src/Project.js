import React from "react";


const SkillHublogo = require("./assets/s.png");
const medical = require("./assets/medical.jpg");
const e_commerce = require("./assets/e_commerce.png");

const project = [
    {
        Nameproject: 'Skillhub',
        Intro: 'Skillhub website helps users create resumes (CVs) and search for job candidates for companies.',
        logo: SkillHublogo,
        view: 'https://github.com/hamza1878'
    },
    {
        Nameproject: 'Medical Shop',
        Intro: 'Medical shop website helps users search for medications online.',
        logo: medical,
        view: 'https://github.com/hamza1878'
    },
    {
        Nameproject: 'E-commerce',
        Intro: 'E-commerce website helps users purchase items online.',
        logo: e_commerce,
        view: 'https://github.com/hamza1878'
    }
];

const Project = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.map((element, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img src={element.logo} alt={element.Nameproject} className="w-32 h-32 object-contain mx-auto mb-4" />
                    <h3 className="text-4xl text-white font-bold mt-2">{element.Nameproject}</h3>
                    <p className="mt-2 text-white">{element.Intro}</p>
                    <a href={element.view} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        View Project
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Project;
