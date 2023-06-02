import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-center py-12">
          <Image
            src="./img/logo.svg"
            alt="Kulteo"
            width={200}
            height={100}
            className="h-auto w-44 md:w-72"
          />
        </div>
        <div className="border-[0.5px] border-whitesmoke"></div>
        <div className="my-8 flex items-center justify-center text-whitesmoke">
          <Link href={'/'}>Mentions légales</Link>
          <span className="mx-1">-</span>
          <p>Étudiants à DC Paris</p>
        </div>
      </div>
    </footer>
  );
}
