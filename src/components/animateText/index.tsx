import { motion } from 'framer-motion';

const mainQuote = {
  initial: {
    opacity: 1,
  },
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const mainText = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type Props = {
  text: string;
  className?: string;
};

const AnimateText = ({ text, className }: Props) => {
  return (
    <div className="flex w-full mx-auto py-2 sm:py-0 items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={mainQuote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, idx) => (
          <motion.span
            key={word + '-' + idx}
            className="inline-block"
            variants={mainText}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimateText;
