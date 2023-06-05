import { useEffect } from 'react';
import { useRouter } from 'next/router';

// @ts-ignore
var _paq = _paq || [];

function generateRandomNumber() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / (Math.pow(2, 32) - 1);
}


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Générer un nombre aléatoire entre 0 et 1
    const randomNum = generateRandomNumber();
    
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
