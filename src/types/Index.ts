import { IconType } from 'react-icons';

export interface AccordionItem {
  icon?: IconType;
  title: string;
  content: string | string[] | React.ReactNode | null;
}
