import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout';
import Link from 'next/link';

import AnimateText from '@/components/animateText';
import TransitionEffect from '@/components/transitionEffect';

import landingPicture from '../../public/images/landingpic.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>DataByteMike | Home Page </title>
        <meta
          name="description"
          content="Home Page of DataByteMike"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full min-h-screen items-center text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex lg:flex-col w-full items-center justify-between gap-16">
            <div className="w-1/2 md:w-full rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8">
              <Image
                src={landingPicture}
                alt=""
                className="w-full h-auto lg:hidden md:inline-block md:w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="flex flex-col w-1/2 lg:w-full items-center self-center lg:text-center">
              <AnimateText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer & Software Engineer,
                I am dedicated to turning ideas into innovative web
                applications and software. Explore my latest projects,
                showcasing my expertise in web development and
                creating software.
              </p>
              <div className="flex mt-2 items-center self-start lg:self-center">
                <Link
                  href="/contact"
                  className="text-lg text-dark dark:text-light md:text-base font-medium capitalize underline underline-offset-2"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
