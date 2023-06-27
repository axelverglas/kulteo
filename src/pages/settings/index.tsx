import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { ArrowRightIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Settings() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Heading level="h1" className="text-2xl md:text-[2rem]">
                Votre profil
              </Heading>
              <p className="mt-6">Gérer les paramètres de votre profil</p>
              <Link href={"/settings/avatar"}>
              <div className="mt-6 flex items-center justify-between rounded-lg border border-grayishblue bg-slate-50 p-6 shadow-light dark:border-jetdark dark:bg-black dark:shadow-night">
                <div className="flex items-center gap-6">
                  <Image
                    src={session?.user?.image || '/img/default-avatar.webp'}
                    alt="Avatar"
                    className="rounded-full"
                    height={55}
                    width={55}
                  />
                  <p className="font-medium">Modifier ma photo de profil yes</p>
                </div>
                <ArrowRightIcon className="h-5 w-5 stroke-night dark:stroke-whitesmoke" />
              </div>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
