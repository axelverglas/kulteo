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
        userType
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if(res.ok){
      await res.json();
      toast.success('Merci pour votre inscription !');
    } else {
      toast.error('Une erreur est survenue');
    }
  };

  const [userType, setUserType] = useState('particulier');

  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-6xl flex items-center justify-center">
      <div className="relative w-[650px]">
          <div className="absolute top-[-30px] left-0 right-0">
            <div className="flex overflow-hidden">
              <button 
                className={`w-full font-semibold rounded-t-xl py-2 bg-black border-[2px] border-primary ${userType === 'particulier' ? 'text-black bg-primary' : 'text-primary'}`}
                onClick={() => setUserType('particulier')}
              >
                Particulier
              </button>
              <button 
                className={`w-full font-semibold bg-black border-[2px] border-primary rounded-t-xl py-2 ${userType === 'professionnel' ? 'text-black bg-primary' : 'text-primary'}`}
                onClick={() => setUserType('professionnel')}
              >
                Professionnel
              </button>
            </div>
          </div>
        <div className="flex flex-col items-center justify-center border-[2px] border-primary rounded-xl py-12">
          <h2 className="text-center font-roc text-3xl text-white">
            Newsletter
          </h2>
          <p className="my-5 text-center md:w-[420px]">
            {userType === 'particulier' ? 'Vous êtes un passionné de culture et notre projet vous intéresse ? Inscrivez-vous à notre newsletter !' : 'Vous êtes un professionnel et notre projet vous intéresse ? Inscrivez-vous à notre newsletter !'}
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
                className="absolute right-2 top-2 h-12 rounded-[3rem] bg-secondary px-4 font-semibold text-black"
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
                En validant votre inscription, vous acceptez que « {siteConfig.name} » mémorise et utilise votre adresse email dans le but
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
      </div>
    </section>
  );
}
