import Head from 'next/head';
import Image from 'next/image';

import AnimateNumber from '@/components/animateNumber';
import AnimateText from '@/components/animateText';
import Layout from '@/components/layout';
import Skills from '@/components/about/skill';
import TransitionEffect from '@/components/transitionEffect';

import profilePicture from '../../public/images/about.png';
import Experiences from '@/components/about/experience';
import Education from '@/components/about/education';

const about = () => {
  return (
    <>
      <Head>
        <title>DataByteMike | About Page </title>
        <meta
          name="description"
          content="Information About DataByteMike, his experience & education"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimateText
            text="Passion Fuels Purpose!"
            className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <div className="w-full grid grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col col-span-3 xl:col-span-4 lg:col-span-8 items-start justify-start lg:order-2">
              <h2 className="mb-4 uppercase text-lg font-bold text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Michael AKA DataByteMike, a full-stack
                developer and software engineer with a passion for
                creating beautiful, functional, and user-centered
                digital experiences. Being a recent graduate from
                college, I have 1+ years of experience in the field
                from personal projects. I am always looking for new
                and innovative ways to bring my clients&apos; visions
                to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making
                things look pretty - it&apos;s about solving problems
                and creating intuitive, enjoyable experiences for
                users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or
                other software product, I bring my commitment to
                design excellence and user-centered thinking to every
                project I work on. I look forward to the opportunity
                to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="relative h-max col-span-3 xl:col-span-4 lg:col-span-8 rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 lg:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark dark:bg-light" />
              <Image
                src={profilePicture}
                alt="DataByteMike"
                className="w-full h-auto rounded-2"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col xl:flex-row items-end xl:items-center justify-between col-span-2 xl:col-span-8 lg:order-3">
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimateNumber value={1} />+
                </span>
                <h1 className="font-medium capitalize text-dark/75 xl:text-center text-xl dark:text-light md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h1>
              </div>
              <div className="flex flex-col items-end xl:items-center justify-center ">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimateNumber value={15} />+
                </span>
                <h1 className="font-medium capitalize text-dark/75 dark:text-light xl:text-center text-xl md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h1>
              </div>
            </div>
          </div>
          <Skills />
          <Experiences />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
