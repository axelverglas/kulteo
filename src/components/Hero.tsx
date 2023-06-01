import { siteConfig } from "@/config";
import Link from "next/link";

export default function Hero(){
    return (
        <section className="hero h-screen flex flex-col justify-center">
            <div className="container px-4 sm:px-6 lg:px-8">
                <h1 className="font-roc text-6xl leading-[4.25rem] w-[44rem]">
                    Rendre la culture <span className="bg-primary text-black rounded-xl pt-2 px-3">accessible</span> autrement avec {siteConfig.name}
                </h1>

                <p className="mt-4 mb-8 w-[30rem]">
                    Offrez-vous une expérience immersive à portée de clic : découverte, rencontre et partage.
                </p>

                <Link href={"/"} className="inline-block bg-secondary text-black rounded-xl px-4 pt-4 pb-3">
                    Explorer {siteConfig.name} !
                </Link>
            </div>
        </section>
    )
}