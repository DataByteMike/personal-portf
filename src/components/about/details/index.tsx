import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import LiIcon from '@/utilities/liIcon';

type Props = {
  occupation: string;
  place: string;
  time: string;
  address: string;
  work?: string;
};

const Details = ({
  occupation,
  place,
  time,
  address,
  work,
}: Props) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="flex flex-col w-[60%] md:w-[80%] my-8 first:mt-0 last:mb-0 mx-auto justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {occupation}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {time}&nbsp;|&nbsp;
          <span className="text-primary dark:text-primaryDark capitalize">
            {place}
          </span>
          ,&nbsp;
          {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export default Details;
