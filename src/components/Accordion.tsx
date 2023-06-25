import React, { FC, useState } from 'react';
import AccordionItemComponent from './AccordionItem';
import { AccordionItem } from '@/types/Index';

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col gap-y-6">
      <div>
        <h2 className="font-roc text-2xl font-bold">
          Voici les{' '}
          <span className="text-secondarylight dark:text-primary">
            clés du savoir
          </span>
        </h2>
      </div>
      <div className="flex flex-col gap-y-5">
        {items.map((item, index) => (
          <AccordionItemComponent
            key={index}
            item={item}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
