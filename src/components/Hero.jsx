import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaKaggle } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiNotion } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiPlatzi } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 py-4  ">
        <a
          href="https://gussdev.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700 animate-[wiggle_3s_ease-in-out_infinite]">
          <CgWebsite className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></CgWebsite>
          <span className="py-3 text-xl font-primary text-white ">
            Sitio Web
          </span>
        </a>

        <a
          href="https://github.com/gustavopumachagua"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <GoMarkGithub className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></GoMarkGithub>
          <span className="py-3 text-xl font-primary text-white ">GitHub</span>
        </a>
        <a
          href="https://www.kaggle.com/gussdev"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <FaKaggle className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></FaKaggle>
          <span className="py-3 text-xl font-primary text-white ">Kaggle</span>
        </a>
        <a
          href="https://www.notion.so/gussdev/Apuntes-3abec46a55c04b92ba7ea40f0ab117ba"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <SiNotion className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></SiNotion>
          <span className="py-3 text-xl font-primary text-white ">Notion</span>
        </a>
        <a
          href="https://www.instagram.com/guss.dev/"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <BsInstagram className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></BsInstagram>
          <span className="py-3 text-xl font-primary text-white ">
            Instagram
          </span>
        </a>
        <a
          href="https://twitter.com/Gussdev"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <BsTwitter className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></BsTwitter>
          <span className="py-3 text-xl font-primary text-white ">Twitter</span>
        </a>
        <a
          href="https://platzi.com/p/gustavopumachagua/"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <SiPlatzi className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></SiPlatzi>
          <span className="py-3 text-xl font-primary text-white ">Platzi</span>
        </a>
        <a
          href="https://open.spotify.com/user/12158138688?si=4798854e43b643c5"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <BsSpotify className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></BsSpotify>
          <span className="py-3 text-xl font-primary text-white ">Spotify</span>
        </a>
        <a
          href="https://github.com/gustavopumachagua"
          target="_blank"
          rel="noreferrer"
          className="rounded-3xl border-2 border-white space-x-12 flex sm:space-x-24 md:space-x-48  h-14 bg-black hover:bg-slate-700">
          <BsLinkedin className="w-10 h-10 ml-3 mt-1 text-white animate-pulse"></BsLinkedin>
          <span className="py-3 text-xl font-primary text-white ">
            Linkedin
          </span>
        </a>
        <div className="py-6 ">
          <div className="rounded-[36px] overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/playlist/6PruOhQcfMRGXEyofoRXIg"
              width="100%"
              height="500"
              allowtransparency="true"
              allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
//https://open.spotify.com/playlist/6PruOhQcfMRGXEyofoRXIg?si=e6f8bca1c6324673
