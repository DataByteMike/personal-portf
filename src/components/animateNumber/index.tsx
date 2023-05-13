import { useMotionValue, useSpring, useInView } from 'framer-motion';
import { useRef, useMemo, useEffect } from 'react';

type Props = {
  value: number;
};

const AnimateNumber = ({ value }: Props) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const inView = useInView(ref, { once: true });

  useMemo(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useMemo(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default AnimateNumber;
