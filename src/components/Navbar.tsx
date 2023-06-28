import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-10 w-full">
      <div className="container max-w-6xl">
        <nav className="flex h-24 items-center justify-between">
          <Link href="/" className="font-roc text-2xl">
            <Image src="./img/logo.svg" alt="Kulteo" width={150} height={50} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
