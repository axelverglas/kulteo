import { AccordionItem } from '@/types/Index';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
}

export default function AccordionItemComponent({
  item,
  isOpen,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="flex flex-col rounded-lg border border-grayishblue bg-slate-50 shadow-light dark:border-jetdark dark:bg-black dark:shadow-night">
      <div
        className="flex cursor-pointer items-center justify-between px-5 py-3"
        onClick={onClick}
      >
        <div className="flex cursor-pointer items-center gap-x-3">
          {item.icon && (
            <item.icon
              className={`h-5 w-5 stroke-secondarylight dark:stroke-primary  ${
                isOpen ? 'rotate-[-90] transform' : ''
              }`}
            />
          )}
          <p>{item.title}</p>
        </div>
        {isOpen ? (
          <FaChevronDown className="transition-transform duration-200" />
        ) : (
          <FaChevronRight className="duration-20 transition-transform" />
        )}
      </div>
      <div>{isOpen && <p className="px-5 py-3">{item.content}</p>}</div>
    </div>
  );
}
