import React from 'react';
import introImage from '../../assets/images/Header/header.png';
import { socialMedia } from './data';
import PlayLatestVideo from './PlayLatestVideo';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <div
      className="flex flex-col min-h-[700px] md:min-h-[764px] bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${introImage})` }}
    >
      <Navbar />
      <div className="my-auto flex flex-col items-center justify-center px-8 py-28">
        <h1 className="flex flex-col items-center text-2xl md:text-6xl font-black tracking-wide leading-relaxed">
          <span className="capitalize text-white">chorale</span>
          <span className="text-[#5EB436]">Inyange za Mariya</span>
        </h1>

        <p className="mt-3 md:mt-4 text-white leading-relaxed max-w-2xl text-center">
          If you ever feel distressed during your day, call upon our
          Lady, just say this simple prayer: 'Mary, Mother of Jesus,
          please be a mother to me now.' I must admit, this prayer has
          never failed me. _Blessed Mother Teresa
        </p>

        <div className="flex flex-wrap mt-4 md:mt-6 items-center space-x-3 md:space-x-4">
          <button className="rounded-md bg-brand-blue text-white font-semibold py-3 px-8">
            Join Us
          </button>

          <div className="hidden md:block">
            <PlayLatestVideo size="4xl" />
          </div>

          <div className="md:hidden">
            <PlayLatestVideo size="sm" />
          </div>
        </div>

        <div className="flex flex-wrap mt-6 md:mt-12 items-center space-x-3">
          {socialMedia.map((media, index) => (
            <a
              key={media.name}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-2 rounded-full bg-brand-green"
            >
              {media.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
