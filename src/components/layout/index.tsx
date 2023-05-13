type Props = {
  className?: string;
  children: React.ReactNode;
};

const Layout = ({ className, children }: Props) => {
  return (
    <div
      className={`inline-block w-full h-full z-0 p-32 bg-light dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
