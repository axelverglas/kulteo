import DefaultLayout from '@/components/DefaultLayout';
import Footer from '@/components/Footer';
import Social from '@/components/Home/Social';
import Head from 'next/head';
import { siteConfig } from '@/config';

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 font-roc text-2xl">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 font-roc text-xl">{children}</h3>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export default function legal() {
  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
      </Head>
      <DefaultLayout>
        <section className="py-12 pt-24 md:py-24 md:pt-48">
          <div className="container max-w-6xl">
            <h1 className="mb-12 text-center font-roc text-3xl md:mb-16 md:text-4xl">
              Mentions légales
            </h1>

            <Text>
              Le site web https://www.kulteo.fr/ est la propriété exclusive de
              Céline REX-HARRISON. Pour toute demande technique, veuillez vous
              référer à l’agence Meridio à l&apos;adresse
              agence.meridio@gmail.com
            </Text>
            <SubTitle>1. Qui sommes-nous?</SubTitle>

            <Text>
              Kulteo est une plateforme en ligne dont l’objectif est de rendre
              la culture accessible à tous. Pour cela, nous souhaitons
              référencer toutes les institutions et événements culturels
              d’Île-de-France. En outre, nous donnons la possibilité à nos
              utilisateurs d’accéder à des contenus vidéos (visites guidées)
              depuis notre plateforme. Nous travaillons actuellement sur de
              nouvelles fonctionnalités passionnantes, notamment la possibilité
              de créer des groupes de voyage culturel directement depuis notre
              plateforme. Restez à l&apos;affût pour découvrir toutes les
              nouveautés à venir !
            </Text>

            <SubTitle>2. {siteConfig.name} c’est pour qui ?</SubTitle>
            <Text>
              Nous nous adressons principalement aux personnes qui ne peuvent
              pas se déplacer pour accéder à la culture pour diverses raisons
              (personnes en situation d’handicap, personnes âgées, enfants
              malades, etc). Notre plateforme leur permet de vivre des
              expériences culturelles uniques en ligne, sans aucune barrière
              géographique. D&apos;autre part, nous accueillons également ceux
              qui souhaitent aller au-delà de ce qui est traditionnellement
              disponible et explorer davantage la culture. Notre plateforme vous
              offre une plongée profonde dans un univers culturel riche en
              découvertes, rencontres et partages, que vous soyez déjà un
              passionné de culture ou que vous cherchiez à élargir vos horizons.
              Quel que soit votre profil, nous sommes là pour vous accompagner
              dans cette aventure immersive où la culture devient une véritable
              passerelle vers le savoir, l&apos;échange et l&apos;enrichissement
              personnel.
            </Text>

            <SubTitle>3. Nous contacter ?</SubTitle>
            <ul className="mb-4">
              <li>Par téléphone : +33 7 83 19 41 57</li>
              <li>Par email : agence.meridio@gmail.com</li>
              <li>
                Par courriel : 8 bis Rue de la Fontaine au Roi, 75011 Paris
              </li>
            </ul>

            <SubTitle>4. Hébergeur</SubTitle>
            <Text>
              Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789
              https://vercel.com
            </Text>

            <SubTitle>5. Éditeur</SubTitle>
            <Text>
              Ce site web est hébergé par la société Vercel et est donc soumis à
              leur politique de confidentialité. Ce site web a été édité par
              l’agence Merídio et publié le 1 juin 2023.
            </Text>

            <SubTitle>6. Propriété intellectuelle</SubTitle>
            <Text>
              Le contenu présent sur ce site, incluant mais sans s&apos;y
              limiter, les textes, les images, les graphiques, les logos, les
              vidéos et les éléments multimédias, est protégé par les lois sur
              la propriété intellectuelle, y compris les droits d&apos;auteur et
              les marques déposées. Tous ces éléments sont la propriété
              exclusive de Kulteo ou de ses partenaires.
            </Text>

            <Text>
              Toute utilisation non autorisée du contenu de ce site, y compris
              sa reproduction, sa modification, sa distribution ou sa diffusion,
              est strictement interdite. Vous ne pouvez pas utiliser, copier,
              reproduire, modifier, distribuer, afficher, transmettre ou
              exploiter de quelque manière que ce soit le contenu de ce site
              sans l&apos;autorisation préalable écrite de Kulteo.
            </Text>

            <SubTitle>7. Responsabilité</SubTitle>
            <Text>
              Nous nous efforçons de fournir sur notre site des informations
              précises et à jour. Cependant, nous ne pouvons pas garantir que
              ces informations sont exactes, exhaustives ou pertinentes. Par
              conséquent, nous déclinons toute responsabilité pour
              l&apos;utilisation que vous faites des informations présentes sur
              notre site Web.
            </Text>
            <Text>
              Nous ne serons en aucun cas tenus responsables de tout dommage
              direct, indirect, spécifique, consécutif ou exemplaire résultant
              de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser
              notre site Web, y compris les pertes de données, les pertes de
              revenus, les interruptions d&apos;activité ou les dommages
              matériels.
            </Text>

            <Text>
              Sans préavis, nous nous réservons le droit de modifier, de
              suspendre ou d&apos;interrompre l&apos;accès à notre site Web. De
              telles modifications, suspensions ou interruptions ne sont pas
              responsables des conséquences.
            </Text>
            <Text>
              De plus, nous déclinons toute responsabilité liée aux liens
              externes présents sur notre site Web. Bien que nous nous
              efforcions de ne fournir que des liens vers des sites fiables,
              nous n&apos;exerçons aucun contrôle sur le contenu de ces sites,
              nous ne pouvons donc pas être tenus responsables de leur contenu
              ou de leurs pratiques en matière de confidentialité.
            </Text>

            <Text>
              En utilisant notre site, vous acceptez de le faire à vos propres
              risques. Il est de votre responsabilité de prendre toutes les
              mesures nécessaires pour vous protéger contre les virus, les
              logiciels malveillants ou toute autre forme de contenu
              potentiellement nuisible.
            </Text>

            <SubTitle>8. Droit général</SubTitle>
            <Text>
              Les éléments présentés sur ce site sont susceptibles de
              modification sans préavis et sont mis à la disposition des
              internautes, sans aucune garantie d’aucune sorte, expresse ou
              tacite.
            </Text>
            <Text>
              La présence de liens hypertextes présents sur ce site ne crée pas
              une solidarité de responsabilité entre Céline REX-HARRISON et les
              propriétaires des autres sites, quant au contenu des sites sur
              lesquels est redirigé l’internaute. Seule la responsabilité des
              dits sites peut être engagée.
            </Text>

            <Text>
              Les présentes conditions générales d’utilisations (dit CGU)
              représentent nos interactions ainsi que notre rapport avec vous,
              utilisateurs de notre plateforme de l’inscription jusqu&apos;à la
              désactivation de votre compte. Si vous n’êtes pas en accord avec
              les termes des CGU, nous vous recommandons de ne pas utiliser
              notre plateforme.
            </Text>
            <Text>
              En utilisant notre plateforme, vous reconnaissez avoir pris
              connaissance de l’intégralité des termes des CGU ainsi que de la
              politique de protection des données, et de les avoir validés.
            </Text>

            <SubTitle>9. Utilisation du service</SubTitle>
            <Text>
              Lors de la création de votre compte, nous vous invitons à lire et
              à accepter les conditions ici présentes d’utilisations et de la
              politique de protection des données personnels en cochant le
              bouton dédié à cet effet.
            </Text>
            <Text>
              Nous vous conseillons également de consulter les conditions
              d&apos;utilisation ainsi que la politique de protections des
              données personnels lors de votre première utilisation de la
              plateforme ou lors d’éventuelle mise à jour afin d’accepter ces
              mise à jour.
            </Text>
            <Text>
              Age minimum requis: L’âge minimum requis afin d’utiliser notre
              plateforme est de 13 ans. Toute personne ayant un âge inférieur à
              celui-ci ne pourra pas user de notre plateforme.
            </Text>
            <Text>
              Consentement du parent ou tuteur légal: Si vous avez moins de 18
              ans, vous devez obtenir le consentement exprès de votre parent ou
              tuteur légal pour utiliser cette plateforme. Veuillez lire ce
              Contrat avec eux.
            </Text>
            <Text>
              Si vous êtes le parent ou tuteur légal d&apos;un utilisateur de
              moins de 18 ans, lorsque vous acceptez le Contrat vous
              reconnaissez qu’en autorisant votre enfant à utiliser le Service,
              vous êtes soumis aux termes du présent Contrat et êtes responsable
              des activités de votre enfant sur le Service.
            </Text>

            <SubTitle>10. Inscription à la plateforme</SubTitle>

            <H3>1.1 - Condition d’inscription à la plateforme Kulteo</H3>

            <Text>
              Certaines fonctionnalités ne sont disponibles que lors d’une
              inscription sur le site. Avant de pouvoir vous inscrire sur la
              Plateforme vous devez avoir lu et accepté les présentes CGU et la
              Politique de protection des données personnelles. Vous déclarez
              avoir un âge supérieur à 13 ans, ainsi que l’accord de votre
              parent ou votre représentant légal pour l’utilisation de notre
              plateforme.
            </Text>

            <H3>1.2 - Création d’un compte</H3>
            <Text>
              Vous pourrez créer un compte de la manière suivante : Vous pourrez
              remplir manuellement sur notre site vos informations personnelles
              obligatoires pour la connexion à votre compte. Vous devrez saisir
              un email valide, ainsi qu’un mot de passe respectant les
              contraintes prescrites soit : 1 majuscule, un caractère spécial
              ainsi que 8 caractères minimum. L’utilisateur devra également
              cocher la case dédiée aux conditions générales d’utilisation ainsi
              qu’à la politique de confidentialité pour valider qu’il en accepte
              les dits. A l’occasion de la création de votre compte personnel,
              vous vous engagez à fournir des informations exactes tel que votre
              email personnel ainsi qu’un mot de passe personnel. Tout compte
              utilisé par un Tier pourra entraîner la fermeture définitive de
              votre compte si et seulement si vous avez divulgué votre email et
              mot de passe personnel à ce Tier sans avoir pris conscience de
              contacter l’équipe Kulteo. L’identification ainsi que le mot de
              passe doivent rester strictement personnels et confidentiels. Nous
              vous invitons à les conserver pour pouvoir en garder la stricte
              confidentialité. Bien évidemment, en vous inscrivant sur Kulteo,
              vous avez l’obligation de ne pas divulguer votre adresse email et
              votre mot de passe personnel à un Tier, ou alors, en prévenir
              l’équipe Kulteo. Vous vous engagez également à ne pas créer ou
              utiliser sous votre identité un compte d’un Tier ou d’utiliser vos
              données personnelles pour la création d’un autre compte. Vous ne
              pouvez pas céder ou, quoi qu&apos;il en soit, transférer votre
              compte à toute autre personne ou entité.
            </Text>

            <H3>1.3 - Conditions d&apos;accès à la plateforme</H3>
            <Text>
              Pour accéder à notre plateforme, vous devez respecter les
              conditions suivantes :
            </Text>
            <ul className="mb-4 ml-5 list-disc">
              <li>
                Fournir des informations exactes lors de votre inscription.
              </li>
              <li>Garder vos identifiants de connexion confidentiels.</li>
              <li>
                Utiliser la plateforme conformément aux lois, droits de
                propriété intellectuelle et droits des autres utilisateurs.
              </li>
              <li>
                Se conformer aux politiques et règles établies par notre
                plateforme.
              </li>
              <li>
                Nous nous réservons le droit de refuser ou de résilier votre
                accès si vous enfreignez ces conditions. Vous êtes responsable
                de toute activité sous votre compte et devez nous informer de
                toute utilisation non autorisée.
              </li>
            </ul>
            <Text>
              Utilisez la plateforme en toute responsabilité, sachant que nous
              ne sommes pas responsables des dommages résultant de votre
              utilisation.
            </Text>
            <SubTitle>11. Souscription à un abonnement Kulteo</SubTitle>
            <Text>
              Lors d&apos;une souscription à un abonnement Kulteo Premium, vous
              acceptez les conditions d&apos;utilisation de cet abonnement.
              Chaque abonnement réalisé devra, si l&apos;utilisateur à moins de
              18 ans, être sous l’accord du parent ou de l’utilisateur légal de
              l’utilisateur, si cas non confirmé, l&apos;abonnement ne pourra
              être réalisé. Cet abonnement vous donnera accès à des contenus
              limités que la plateforme vous délivrera. Laposabonnement ainsi
              choisi, acheté ou renouvelé, déterminera l’étendu de celui-ci, le
              prix ainsi que les options en plus. Vous ne pouvez pas transférer,
              prêter ou donner votre compte à un autre utilisateur.
            </Text>
            <Text>
              Pour plus d’informations sur tous vos droits vous pouvez vous
              référer à notre Politique de confidentialité.
            </Text>
          </div>
        </section>
        <Social />
      </DefaultLayout>
    </>
  );
}
