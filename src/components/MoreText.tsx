import React, { useState } from 'react';
import Link from 'next/link';

export default function TextContainer({ text }: { text: string }) {
  const maxWords = 60;
  const words = text.split(' ');
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore ? (
        <>
          {text}
          <button
            className="font-medium text-secondarylight dark:text-primary"
            onClick={handleClick}
          >
            Voir moins
          </button>
        </>
      ) : (
        <>
          {words.slice(0, maxWords).join(' ')}
          ...
          {words.length > maxWords && (
            <button
              className="font-medium text-secondarylight dark:text-primary"
              onClick={handleClick}
            >
              Voir plus
            </button>
          )}
        </>
      )}
    </div>
  );
}
