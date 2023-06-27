import { items } from '@/components/ListItem';
import ListItem from '@/components/ListItem';
import Logo from '@/components/Logo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import { signUp } from 'next-auth-sanity/client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import AuthLeftSide from '@/components/auth/LeftSide';
import GoogleButton from '@/components/auth/GoogleButton';
import ts from 'typescript';

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

const SignUpFormSchema = z.object({
  name: z.string().min(1, 'Nom requis'),
  email: z.string().email('Veuillez entrer un email valide'),
  password: z.string().min(1, 'Mot de passe requis'),
});

type SignUpFormInputs = z.infer<typeof SignUpFormSchema>;

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(SignUpFormSchema),
  });
  const onSubmit: SubmitHandler<SignUpFormInputs> = async data => {
    const { email, password, name } = data;
  
    const response = await signUp({
      email,
      password,
      name,
    });
    
    //@ts-ignore
    if (response.error) {
      //@ts-ignore
      if (response.error === 'User already exist') {
        toast.error('Cet utilisateur existe déjà');
      } else {
        toast.error('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    } else {
      await signIn('sanity-login', {
        redirect: false,
        email,
        password
      });
      router.push('/home');
    }
  };
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <AuthLeftSide className="hero-auth-signup" />
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
              id="name"
              type="text"
              label="Votre nom"
              placeholder="Votre nom"
              register={register('name')}
              error={errors.name?.message}
            />
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
              <Button type="submit">S&apos;inscire</Button>
            </div>
            <p className="mt-8 text-center">
              Vous avez un compte ?{' '}
              <Link
                href={'/auth/login'}
                className="font-medium dark:text-secondary"
              >
                Connectez-vous
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
