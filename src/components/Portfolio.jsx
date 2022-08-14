import React from "react";
import jcrew from "../assets/portfolio/jcrew.png";
import lifestore from "../assets/portfolio/lifestore.png";
import mynthresa from "../assets/portfolio/mynthresa.png";

import { Fade } from "react-reveal"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: lifestore,
      link: 'https://vinodproject.vercel.app/',
      repo: 'https://github.com/vin9012d/moral-day-3198',
      text:"Lifestore site clone"
    },
    {
      id: 2,
      src: jcrew,
      link: 'https://storied-platypus-db74f4.netlify.app/',
      repo: 'https://github.com/vin9012d/Project-unit-3',
      text:"Jcrew site clone"
    },
    {
      id: 3,
      src: mynthresa,
      link: 'https://quiet-marzipan-8a0d28.netlify.app/',
      repo: 'https://github.com/vin9012d/PROJECT-UNIT-2',
      text:"Mynthresa site clone"
    }

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio project "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Creative Portfolio section
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo,text }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-110 duration-500">
                <Fade top duration={1000} distance="40px">      <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105  h-60"
              />
                
                

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
                </div>
                </Fade>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
