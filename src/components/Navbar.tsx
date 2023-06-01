import Link from "next/link";
import Image from "next/image";

export default function Navbar(){
    return (
        <header className="fixed w-full top-0 left-0 z-10">
            <div className="container px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-24">
                    <Link href="/" className="font-roc text-2xl">
                        <Image src="./img/logo.svg" alt="Kulteo" width={150} height={50} />
                    </Link>
                </nav>
            </div>
        </header>
    )
}