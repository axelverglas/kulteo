import { siteConfig } from '@/config';
import Link from 'next/link';
import { BsFacebook, BsDiscord, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function Social() {
  return (
    <section className="relative py-12 md:py-24">
      <div className="container relative max-w-xl">
        <div className="social-svg absolute left-[-20%] top-[10%] hidden animate-swingRight md:block"></div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-64 text-center font-roc text-3xl leading-[2.5rem] md:w-72 md:text-4xl md:leading-[3rem]">
            Retrouvez-nous{'  '}
            <span className="mr-2 rounded-lg bg-primary px-2 pb-1 pt-2 text-black">
              également
            </span>
            sur :
          </h2>
          <div className="mt-12 flex space-x-10">
            <Link href={siteConfig.social.facebook} target="_blank">
              <BsFacebook className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
            <Link href={siteConfig.social.discord} target="_blank">
              <BsDiscord className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
            <Link href={siteConfig.social.instagram} target="_blank">
              <BsInstagram className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank">
              <BsLinkedin className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
