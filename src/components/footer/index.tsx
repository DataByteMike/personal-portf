import Link from 'next/link';
import Layout from '../layout';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light dark:text-light text-lg sm:text-base font-medium">
      <Layout className="py-8 md:py-4 flex lg:flex-col items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="flex items-center sm:py-2">
          Build With
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &hearts;
          </span>
          By&nbsp;
          <Link href="/" className="underline underline-offset-2">
            DataByteMike
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
