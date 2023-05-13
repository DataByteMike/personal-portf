import { motion } from 'framer-motion';
import Skill from './skill';

const Skills = () => {
  return (
    <>
      <h2 className="w-full mt-64 md:mt-32 font-bold text-center text-8xl md:text-6xl sm:text-4xl">
        Skills
      </h2>
      <div
        className="relative flex w-full h-screen items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
          dark:text-dark dark:bg-light lg:p-6 md:p-4 sm:text-xs sm:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-24vw" y="2vw" />
        <Skill name="TypeScript" x="18vw" y="6vw" />
        <Skill name="JavaScript" x="-34vw" y="-18vw" />
        <Skill name="ReactJS" x="0vw" y="15vw" />
        <Skill name="Next.js" x="30vw" y="-5vw" />
        <Skill name="Node.js" x="-20vw" y="-15vw" />
        <Skill name="Express.js" x="18vw" y="-12vw" />
        <Skill name="Python" x="-23vw" y="-8vw" />
        <Skill name="C" x="10vw" y="-5vw" />
        <Skill name="Figma" x="33vw" y="13vw" />
        <Skill name="MongoDB" x="19vw" y="-18vw" />
        <Skill name="SQL" x="-23vw" y="18vw" />
        <Skill name="Java" x="-10vw" y="5vw" />
        <Skill name="AWS" x="16vw" y="18vw" />
        <Skill name="Tailwind CSS" x="-32vw" y="10vw" />
        <Skill name="Git" x="-13vw" y="16vw" />
      </div>
    </>
  );
};

export default Skills;
