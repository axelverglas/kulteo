import { useEffect } from 'react';
import { useRouter } from 'next/router';

// @ts-ignore
var _paq = _paq || [];

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Générer un nombre aléatoire entre 0 et 1
    const randomNum = Math.random();
    
    // Si le nombre est inférieur à 0.5, rediriger vers la page indexb (Variation B)
    if(randomNum < 0.5) {
      router.replace('/indexb');
      // Si vous utilisez Matomo, vous pouvez enregistrer cette redirection comme un événement
      _paq.push(['AbTesting::enter', {experiment: 'Landing-page', 'variation': 'landingb'}]);
    }
    else {
      router.replace('/indexa'); // Redirection vers la page index (Variation A)
      _paq.push(['AbTesting::enter', {experiment: 'Landing-page', 'variation': 'original'}]);
    }
  }, [router]);

  return null;
};
