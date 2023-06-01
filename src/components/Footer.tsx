import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer>
            <div className="container max-w-6xl">
                <div className='flex items-center justify-center my-12'>
                    <Image src="./img/logo.svg" alt="Kulteo" width={300} height={150} />
                </div>
                <div className='border-whitesmoke border-[0.75px]'></div>
                <div className='flex items-center justify-center my-8 text-whitesmoke'>
                    <Link href={'/'}>
                        Mentions légales
                    </Link>
                    <span className='mx-1 '>-</span>
                    <p>Étudiants à DC Paris</p>
                </div>
            </div>
        </footer>
    )
}