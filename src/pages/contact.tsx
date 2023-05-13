import Head from 'next/head';
import { useForm, SubmitHandler } from 'react-hook-form';

import AnimateText from '@/components/animateText';
import Layout from '@/components/layout';
import TransitionEffect from '@/components/transitionEffect';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:databytemike@gmail.com?subject=${formData.name}: ${formData.subject}&body=${formData.message}`;
  };

  return (
    <>
      <Head>
        <title>DataByteMike | Contact Page </title>
        <meta
          name="description"
          content="To reach me by email or linkedin"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimateText
            text="Wanna Talk?"
            className="mb-32 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-1 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <form
              className="col-span-1 w-full flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
              encType="text/plain"
            >
              <div className="flex flex-row justify-between w-full gap-8 mb-4 sm:flex-col">
                <input
                  {...register('name', {
                    required: true,
                    maxLength: 20,
                  })}
                  type="text"
                  placeholder="Name"
                  className="text-paragraph dark:bg-light/90 h-[60px] w-1/2 sm:w-full outline-none px-6 text-[15px] rounded-lg focus:outline focus:outline-1"
                />
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="Email"
                  className="text-paragraph dark:bg-light/90 h-[60px] w-1/2 sm:w-full outline-none p-6 text-[15px] rounded-lg focus:outline focus:outline-1"
                />
              </div>
              <input
                {...register('subject', { required: true })}
                type="text"
                placeholder="Subject"
                className="my-4 text-paragraph dark:bg-light/90 h-[60px] outline-none p-6 w-full text-[15px] rounded-lg focus:outline focus:outline-1"
              />
              <textarea
                {...register('message', { required: true })}
                placeholder="Message"
                className="my-4 resize-none w-full outline-none p-6 rounded-lg h-[200px] focus:outline focus:outline-1 dark:bg-light/90"
              />
              <button
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark items-center justify-center mt-4 dark:bg-light dark:text-dark
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
