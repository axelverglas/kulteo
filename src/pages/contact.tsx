import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/Input';
import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Section from '@/components/Section';
import SocialLinks from '@/components/Social';
import { toast } from 'react-hot-toast';
import Head from 'next/head';

const schema = z.object({
  email: z.string().email('Votre adresse mail est invalide'),
  message: z.string().min(1, 'Message requis'),
});

type FormInputs = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async data => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();

    if (response.ok) {
      toast.success('Votre message a bien été envoyé');
      reset({
        email: '',
        message: '',
      });
    } else {
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <>
    <Head>
      <title>Contactez-nous - Kulteo</title>
      <meta
        name="description"
        content="Besoin d'aide, de suggestions ou de partenariats ? Contactez-nous et notre équipe sera ravie de vous assister."
      />
    </Head>
    <Layout>
      <Section>
        <div className="container">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            <div>
              <Heading level="h2">Contactez-nous</Heading>
              <p className="mb-8 mt-6">
                Une question ? Nos équipes vous répondront dès que possible
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="Indiquez votre adresse mail"
                  register={register('email')}
                  error={errors.email?.message}
                />
                <Input
                  id="message"
                  label="Message"
                  placeholder="Posez vos questions et partagez vos remarques"
                  register={register('message')}
                  error={errors.message?.message}
                  textarea
                />
                <Button type="submit">Envoyer le message</Button>
              </form>
            </div>
            <div className="mt-6 md:mt-0">
              <Heading level="h2">Nos réseaux sociaux</Heading>
              <p className="mb-8 mt-6">
                L&apos;écosystème qui rend la culture accessible à tous
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </Section>
    </Layout>
    </>
  );
}
