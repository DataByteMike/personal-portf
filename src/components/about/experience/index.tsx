import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import Details from '../details';

const Experiences = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
      >
        <motion.div
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            occupation="Computer Science Tutor"
            place="Florida Institute of Technology"
            time="August 2021 - April 2023"
            address="Melbourne, FL"
            work=" The individual has experience tutoring students in programming languages such as Java, Python, and C, ranging from beginner to intermediate levels. They have helped students with various tasks such as projects, homework, and debugging lab assignments. Additionally, they have facilitated group discussions and provided guidance on coding and problem-solving techniques. Finally, they have provided constructive feedback to students to enhance their programming skills and understanding."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
