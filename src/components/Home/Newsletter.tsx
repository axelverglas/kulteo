import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

const schema = z.object({
  email: z.string().email({
    message: 'Entrer une adresse email valide',
  }),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'Vous devez accepté les conditions.',
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
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await res.json();
    toast.success('Merci pour votre inscription !');
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center font-roc text-3xl text-black">
          <span className="rounded-xl bg-primary px-2 pb-1 pt-2">
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
