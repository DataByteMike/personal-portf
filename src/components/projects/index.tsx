import { GithubIcon } from '@/utilities/icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  category: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
};

const FeaturedProject = ({
  category,
  title,
  summary,
  img,
  link,
  github,
}: Props) => {
  return (
    <article
      className="flex lg:flex-col w-full items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light
    shadow-2xl relative rounded-br-2xl lg:p-8 xs:rounded-2xl xs:rounded-br-3xl p-12 xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-full h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl sm:-right-2 sm:h-[101%] sm:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {category}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Page
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
