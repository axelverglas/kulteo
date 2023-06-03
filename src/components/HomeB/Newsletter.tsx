import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

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

    if (res.ok) {
      await res.json();
      toast.success('Merci pour votre inscription !');
    } else {
      toast.error('Une erreur est survenue');
    }
  };

  const [userType, setUserType] = useState('particulier');

  return (
    <section className="pt-12 md:pt-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center font-roc text-3xl text-white">
          Notre{' '}
          <span className="rounded-xl bg-primary px-2 pb-1 pt-2 text-black">
            Newsletter
          </span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="my-6 text-center md:w-[420px]">
            Vous êtes un passionné de culture et notre projet vous intéresse ?
            Inscrivez-vous à notre newsletter !
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[420px]"
          >
            <div className="relative">
              <input
                type="email"
                {...register('email')}
                className="h-16 w-full rounded-[3rem] border-[3px] border-secondary bg-transparent px-6 text-white outline-none"
                placeholder="Email..."
              />
              <button
                type="submit"
                className="absolute right-2 top-2 h-12 rounded-[3rem] bg-secondary hover:bg-secondary/80 px-4 font-semibold text-black"
              >
                Envoyer
              </button>
            </div>
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
                En validant votre inscription, vous acceptez que « mon
                entreprise » mémorise et utilise votre adresse email dans le but
                de vous envoyer mensuellement notre lettre d&apos;informations
              </label>
            </div>
            {errors.checkbox && (
              <p className="mt-2 text-center text-red-500">
                {errors.checkbox.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
