import { BsFacebook, BsDiscord, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { siteConfig } from '@/config';

export default function Social() {
  return (
    <section className="relative pb-24 pt-12 md:pb-32 md:pt-16">
      <div className="container relative max-w-xl">
        <div className="social-svg absolute left-[-20%] top-[10%] hidden animate-swingRight md:block"></div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-64 text-center font-roc text-3xl leading-[2.5rem] md:w-72 md:text-4xl md:leading-[3rem]">
            Rejoignez nous dès{'  '}
            <span className="rounded-lg bg-primary px-2 pb-1 pt-2 text-black">
              aujourd&apos;hui
            </span>
          </h2>
          <div className="mt-12 flex space-x-10">
            <Link href={siteConfig.social.facebook}>
              <BsFacebook className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
            <Link href={siteConfig.social.discord}>
              <BsDiscord className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
            <Link href={siteConfig.social.instagram}>
              <BsInstagram className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
            <Link href={siteConfig.social.linkedin}>
              <BsLinkedin className="h-10 w-10 transition-all hover:text-primary md:h-14 md:w-14" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
