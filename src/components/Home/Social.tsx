import { BsFacebook, BsDiscord, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Social() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container">
        <div className="hidden md:block absolute left-96 top-20 w-24 h-24">
          <svg
          className='w-auto h-auto'
            viewBox="0 0 131 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128.829 126.977C17.63 150.564 -18.4343 64.1226 13.1211 29.8543C42.701 -2.26866 89.5772 18.8337 104.945 42.4427C119.566 64.9034 98.7081 83.124 83.4616 64.275C64.9074 41.3366 71.5407 14.808 83.1113 1.62311M128.829 126.977L95.8389 105.52M128.829 126.977L107.265 160.009"
              stroke="#F4F4F4"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-64 text-center font-roc text-3xl leading-[2.5rem] md:w-72 md:text-4xl md:leading-[3rem]">
            Rejoignez nous dès{'  '}
            <span className="rounded-xl bg-primary px-2 pb-1 pt-2 text-black">
              aujourd&apos;hui
            </span>
          </h2>
          <div className="mt-12 flex space-x-10">
            <BsFacebook className="h-10 w-10 md:h-14 md:w-14" />
            <BsDiscord className="h-10 w-10 md:h-14 md:w-14" />
            <BsInstagram className="h-10 w-10 md:h-14 md:w-14" />
            <BsLinkedin className="h-10 w-10 md:h-14 md:w-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
