import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  title: string;
  className: string;
};

// reusable link component
const CustomLink = ({ href, title, className = '' }: Props) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute inline-block h-[1px] left-0 -bottom-0.5 bg-dark dark:bg-light group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default CustomLink;
