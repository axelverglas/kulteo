import { useState, useEffect } from 'react';

const useMedia = (mediaQuery: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // Vérifie si le rendu est côté serveur
    if (typeof window === 'undefined') return;

    // Crée un MediaQueryList en utilisant la requête passée en paramètre
    const mql = window.matchMedia(mediaQuery);

    // Met à jour l'état avec la correspondance initiale
    setMatches(mql.matches);

    // Ajoute un écouteur d'événements pour mettre à jour l'état en cas de changement
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener('change', listener);

    // Supprime l'écouteur d'événements lors du nettoyage
    return () => {
      mql.removeEventListener('change', listener);
    };
  }, [mediaQuery]);

  return matches;
};

export default useMedia;
