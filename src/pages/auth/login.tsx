import { items } from '@/components/ListItem';
import ListItem from '@/components/ListItem';
import Logo from '@/components/Logo';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const LoginFormSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
});

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
  });
  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    const { email, password } = data;

    console.log(email, password);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="hero-light dark:hero-dark h-screen">
        <div className="flex flex-col justify-center pt-32">
          <div className="mx-auto">
            <Logo className="h-auto w-56" />
            <div className="flex flex-col justify-center">
              <h1 className="mb-10 mt-20 font-roc text-4xl font-bold leading-[3rem] md:w-[590px]">
                Entrez dans l&apos;écosystème qui rend la culture{' '}
                <span className="rounded-lg bg-secondarylight px-2 pb-1 pt-2 text-white dark:bg-primary dark:text-night">
                  accessible
                </span>{' '}
                à tous
              </h1>
              <ul className="w-[500px]">
                {items.map((item, index) => (
                  <ListItem key={index}>
                    {item.text}
                    <span className="font-semibold text-secondarylight dark:text-primary">
                      {item.emphasis}
                    </span>
                    {item.additionalText}
                  </ListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-96 flex-col justify-start pt-32 gap-10">
        <h2 className="text-center font-roc text-4xl font-bold">Connexion</h2>
        <div className='flex justify-center'>
        <button
              className="flex w-80 items-center justify-center bg-whitesmoke rounded-lg py-2 px-4 mt-8 border shadow-light"
            >
              <span className="mr-3 inline-block shrink-0 self-center">
                <FcGoogle
                  size={20}
                  className="shrink-0 align-middle leading-4"
                />
              </span>
              Sign in with Google
            </button>
            </div>
            <div className='flex items-center'>
  <hr className='flex-grow border-t border-gray-300'/>
  <p className="mx-4">ou</p>
  <hr className='flex-grow border-t border-gray-300'/>
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
          <p className='text-sm underline font-medium'>Mot de passe oublié?</p>
          <div className="mt-8 flex items-center justify-center">
            <Button type="submit">Se connecter</Button>
          </div>
          <p className="mt-8 text-center">
            Vous n&apos;avez pas de compte ?{' '}
            <Link href={'/register'} className="font-medium dark:text-secondary">
              Inscrivez-vous
            </Link>
          </p>
        </form>
        </div>
      </div>
    </div>
  );
}
