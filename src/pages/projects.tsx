import Head from 'next/head';

import AnimateText from '@/components/animateText';
import Layout from '@/components/layout';
import TransitionEffect from '@/components/transitionEffect';

import FeaturedProject from '@/components/projects';
import Project from '@/components/projects/project';

import adn from '../../public/images/adn.png';
import financeTracker from '../../public/images/financeTracker.jpg';
import travelOasis from '../../public/images/travelOasis.png';
import bigData from '../../public/images/bigData.jpg';

const projects = () => {
  return (
    <>
      <Head>
        <title>DataByteMike | Projects Page </title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimateText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gay-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Automated Drone Navigation"
                summary="Our mission is to provide an automated computer controlled flight-traversing drone that can travel and land
                amongst aerial traffic safely and reliably without an operator."
                link="https://ad-nav.github.io/adn/"
                category="Feature Senior Design Project"
                img={adn}
                github="https://github.com/ad-nav/adn"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="FinanceTracker"
                link="https://finance-tracker-app-six.vercel.app"
                category="Side Project"
                img={financeTracker}
                github="https://github.com/DataByteMike/finance-tracker-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Travel Oasis"
                link="https://travel-oasis.vercel.app"
                category="Side Project"
                img={travelOasis}
                github="https://github.com/DataByteMike/Travel-Oasis"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Functional Map Of The World (fMoW) Visualizer"
                summary="Data plays a crucial role in enabling businesses around the world to make well informed decisions to benefit their company and help them achieve their
                goals. Data Analysts are employed by these companies to dissect tons of data as well as perform trend analysis. Traditionally, data is collected through surveys,
                interviews, web scraping and observation, but images are also a useful form of data. By classifying images with the use of deep learning models, as well as analyzing
                the metadata associated with these images such as date, time and location, substantial information can be extracted from huge datasets consisting of images to guide
                businesses in making decisions. Within this research, we will use the functional map of the world (FMOW) dataset that is publicly available and investigate and model
                which regions have high activity based on metadata and temporal data. An interactive web visualization will also be built based on the data analysis and model. "
                link="https://fmowbigdata.netlify.app"
                category="Feature Semester Project"
                img={bigData}
                github="https://github.com/mhon2014/BigDataProject"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
