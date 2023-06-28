import { items } from '@/components/ListItem';
import ListItem from '@/components/ListItem';
import Logo from '@/components/Logo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import AuthLeftSide from '@/components/auth/LeftSide';
import GoogleButton from '@/components/auth/GoogleButton';
import Head from 'next/head';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const LoginFormSchema = z.object({
  email: z.string().email('Veuillez entrer un email valide'),
  password: z.string().min(1, 'Mot de passe requis'),
});

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
  });
  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    const { email, password } = data;

    try {
      const res = await signIn('sanity-login', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        console.log(res);
        toast.error('Invalid email or password.');
        return;
      }

      router.push('/home');
    } catch (error) {
      console.log(error);

      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>Kulteo - Connexion à votre compte</title>
        <meta
          name="description"
          content="Connectez-vous à votre compte Kulteo pour explorer la culture autrement. Rejoignez la communauté Kulteo dès maintenant !"
        />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AuthLeftSide className="hero-auth" />
        <div className="mx-auto flex w-96 flex-col justify-start gap-10 pt-32">
          <h2 className="text-center font-roc text-4xl font-bold">Connexion</h2>
          <div className="flex justify-center">
            <GoogleButton />
          </div>
          <div className="flex items-center">
            <hr className="flex-grow border-t border-gray-300" />
            <p className="mx-4">ou</p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="email"
                type="email"
                label="Adresse mail"
                placeholder="Votre adresse email"
                register={register('email')}
                error={errors.email?.message}
              />
              <Input
                id="password"
                type="password"
                label="Mot de passe"
                placeholder="Votre mot de passe"
                register={register('password')}
                error={errors.password?.message}
              />
              <div className="mt-8 flex items-center justify-center">
                <Button type="submit">Se connecter</Button>
              </div>
              <p className="mt-8 text-center">
                Vous n&apos;avez pas de compte ?{' '}
                <Link
                  href={'/auth/signup'}
                  className="font-medium dark:text-secondary"
                >
                  Inscrivez-vous
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
