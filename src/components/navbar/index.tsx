import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import CustomLink from './customLink';
import CustomMobileLink from './customMobileLink';
import UseThemeSwitcher from '@/states/useThemeSwitcher';

import {
  LinkedInIcon,
  GithubIcon,
  SunIcon,
  MoonIcon,
} from '@/utilities/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Hold current theme mode
  const { mode, setMode } = UseThemeSwitcher();

  // Handle click behavior within navbar
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex relative w-full z-10 px-32 py-8 lg:px-16 md:px-12 sm:px-8 items-center justify-between dark:text-light font-medium">
      {/* Mobile icon (Hamburger) */}
      <button
        className="hidden lg:flex flex-col items-center justify-center "
        onClick={handleClick}
      >
        <span
          className={`h-0.5 w-6 bg-dark dark:bg-light block transition-all duration-300 ease-out rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        />
        <span
          className={`h-0.5 w-6 my-0.5 bg-dark dark:bg-light block transition-all duration-300 ease-out rounded-sm ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-dark dark:bg-light block transition-all duration-300 ease-out rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        />
      </button>
      {/* Desktop */}
      <div className="w-full flex lg:hidden items-center justify-between">
        <nav>
          <CustomLink
            href="/"
            title="home"
            className="mr-4 capitalize"
          />
          <CustomLink
            href="/about"
            title="about"
            className="mx-4 capitalize"
          />
          <CustomLink
            href="/projects"
            title="projects"
            className="mx-4 capitalize"
          />
          <CustomLink
            href="/contact"
            title="contact"
            className="ml-4 capitalize"
          />
        </nav>
        <nav className="flex flex-wrap items-center justify-center">
          <Link href="/" target={'_blank'} className="w-6 mr-3">
            <LinkedInIcon />
          </Link>
          <Link href="/" target={'_blank'} className="w-6 my-3">
            <GithubIcon />
          </Link>
          <button
            onClick={() =>
              setMode(mode === 'light' ? 'dark' : 'light')
            }
            className={`flex w-7 ml-2 p-1 items-center justify-center rounded-full ${
              mode === 'light'
                ? 'bg-dark text-light'
                : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          className="fixed flex flex-col min-w-[70vw] z-30 py-32 top-1/2 left-1/2 items-center justify-between -translate-x-1/2 -translate-y-1/2
           bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md"
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <Link
              href="/"
              target={'_blank'}
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="/"
              target={'_blank'}
              className="w-6 my-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </Link>
            <button
              onClick={() =>
                setMode(mode === 'light' ? 'dark' : 'light')
              }
              className={`w-7 ml-2 flex items-center justify-center rounded-full p-1 ${
                mode === 'light'
                  ? 'bg-dark text-light'
                  : 'bg-light text-dark'
              } sm:mx-1`}
            >
              {mode === 'dark' ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
