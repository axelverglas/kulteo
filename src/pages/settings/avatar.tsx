import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { ArrowLeftIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <Layout>
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className='flex gap-x-3'>
              <button onClick={handleGoBack}>
            <ArrowLeftIcon className="h-6 w-6 stroke-night dark:stroke-white" />
          </button>
              <Heading level="h1" className="text-2xl md:text-[2rem]">
                Photo de profil
              </Heading>
              </div>
              <p className="mt-6">Sélectionnez ou importez une photo de profil à votre image</p>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
