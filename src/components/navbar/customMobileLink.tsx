import { useRouter } from 'next/router';

type Props = {
  href: string;
  title: string;
  className: string;
  toggle: Function;
};

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle,
}: Props) => {
  const router = useRouter();

  const handleRoute = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleRoute}
    >
      {title}
      <span
        className={`absolute inline-block h-[1px] left-0 -bottom-0.5 bg-light dark:bg-dark group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
