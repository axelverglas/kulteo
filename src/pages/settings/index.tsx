import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { BsTrash } from 'react-icons/bs';
import { signOut } from 'next-auth/react';

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

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <Head>
        <title>Paramètres - Découvrez Kulteo</title>
        <meta
          name="description"
          content="Accédez aux paramètres de votre compte sur Kulteo et personnalisez votre expérience selon vos préférences."
        />
      </Head>
      <Layout>
        <Section>
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-14">
              <div>
                <Heading level="h1" size="h2">
                  Votre profil
                </Heading>
                <p className="mt-6">Gérer les paramètres de votre profil</p>
                <div className="mt-6 flex gap-x-6">
                  <Image
                    src={session?.user?.image || '/img/default-avatar.webp'}
                    alt="Avatar"
                    className="rounded-full"
                    height={60}
                    width={60}
                  />
                  <div>
                    <Heading level="h2" size="h3">
                      {session?.user?.name}
                    </Heading>
                    <p> {session?.user?.email}</p>
                  </div>
                </div>
              </div>
              <div>
                <Heading level="h2" size="h3">
                  Votre compte
                </Heading>
                <button
                  className="mt-6 flex items-center text-red-500 hover:text-red-600"
                  onClick={handleSignOut}
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </Container>
        </Section>
      </Layout>
    </>
  );
}
