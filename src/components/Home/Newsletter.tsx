import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { siteConfig } from '@/config';

const schema = z.object({
  email: z.string().email({
    message: 'Entrez une adresse email valide',
  }),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'Vous devez accepter les conditions.',
  }),
});

type NewsletterFormInputs = z.infer<typeof schema>;

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<NewsletterFormInputs> = async data => {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        userType,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await res.json();  // Add this line

    if (res.ok) {
      toast.success('Merci pour votre inscription !');
    } else {
      toast.error(responseData.error || 'Une erreur est survenue');  // Change this line
    }
  };

  const [userType, setUserType] = useState('particulier');

  return (
    <section className="py-12 md:py-16">
      <div className="container flex max-w-6xl items-center justify-center">
        <div className="relative w-[650px]">
          <div className="absolute left-0 right-0 top-[-30px]">
            <div className="flex overflow-hidden">
              <button
                className={`w-full rounded-t-xl border-[2px] border-primary bg-black py-2 font-semibold ${
                  userType === 'particulier'
                    ? 'bg-primary text-black'
                    : 'text-primary'
                }`}
                onClick={() => setUserType('particulier')}
              >
                Particulier
              </button>
              <button
                className={`w-full rounded-t-xl border-[2px] border-primary bg-black py-2 font-semibold ${
                  userType === 'professionnel'
                    ? 'bg-primary text-black'
                    : 'text-primary'
                }`}
                onClick={() => setUserType('professionnel')}
              >
                Professionnel
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border-[2px] border-primary p-7 md:py-12">
            <h2 className="text-center font-roc text-3xl text-white">
              Newsletter
            </h2>
            <p className="my-5 text-center md:w-[500px]">
              {userType === 'particulier' ? (
                <>
                  <span className="md:inline-block">
                    Vous êtes un passionné de culture et notre projet vous
                    intéresse ?
                  </span>
                  <span className="block md:inline">
                    Inscrivez-vous à notre newsletter !
                  </span>
                </>
              ) : (
                <>
                  <span className="md:inline-block">
                    Vous êtes un professionnel et notre projet vous intéresse ?
                  </span>
                  <span className="block md:inline">
                    Inscrivez-vous à notre newsletter !
                  </span>
                </>
              )}
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full md:w-[420px]"
            >
              <input
                type="email"
                {...register('email')}
                className="h-16 w-full rounded-[3rem] border-[3px] border-secondary bg-transparent px-6 text-white outline-none"
                placeholder="Email..."
              />
              {errors.email && (
                <p className="mt-2 text-center text-red-500">
                  {errors.email.message}
                </p>
              )}
              <div className="mt-8 flex items-start">
                <input
                  type="checkbox"
                  {...register('checkbox')}
                  className="mt-1 border border-white bg-transparent"
                />
                <label className="ml-2 block w-full text-xs md:w-[405px]">
                  En validant votre inscription, vous acceptez que{' '}
                  {siteConfig.name} mémorise et utilise votre adresse email dans
                  le but de vous envoyer mensuellement notre lettre
                  d&apos;informations
                </label>
              </div>
              {errors.checkbox && (
                <p className="mt-2 text-center text-red-500">
                  {errors.checkbox.message}
                </p>
              )}
              <div className="flex items-center justify-center ">
                <button
                  type="submit"
                  className="mt-8 h-12 rounded-[3rem] bg-secondary px-6 font-semibold text-black transition-all hover:bg-white"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
