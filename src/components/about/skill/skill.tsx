import { motion } from 'framer-motion';

type Props = {
  name: string;
  x: string;
  y: string;
};

const skill = ({ name, x, y }: Props) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6
      shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
      sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light sm:font-bold"
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x: x,
        y: y,
        transition: { duration: 1.5 },
      }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default skill;
