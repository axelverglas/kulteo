import { BsFacebook, BsDiscord, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Social() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="md:w-72 w-64 text-center font-roc text-3xl leading-[2.5rem] md:text-4xl md:leading-[3rem]">
            Rejoignez nous dès{'  '}
            <span className="rounded-xl bg-primary px-2 pb-1 pt-2 text-black">
              aujourd&apos;hui
            </span>
          </h2>
          <div className="mt-12 flex space-x-10">
            <BsFacebook className="w-10 h-10 md:w-14 md:h-14" />
            <BsDiscord className="w-10 h-10 md:w-14 md:h-14" />
            <BsInstagram className="w-10 h-10 md:w-14 md:h-14" />
            <BsLinkedin className="w-10 h-10 md:w-14 md:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
