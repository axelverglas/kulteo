import { HomeIcon } from './Icons';

export const items = [
  {
    text: 'Accédez à un ',
    emphasis: 'annuaire',
    additionalText:
      ' étincelant, dévoilant des joyaux culturels et des événements qui vous feront vibrer',
  },
  {
    text: 'Succombez à des visites en live et en ',
    emphasis: 'rediffusion',
    additionalText: ' puis émerveillez-vous avec des podcasts passionnants',
  },
  {
    text: 'Enregistrez les lieux déjà visités et orchestrez vos futures activités culturelles en organisant des ',
    emphasis: 'collections',
  },
];

export default function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="mb-4 flex">
      <div className="h-4 w-4 flex-shrink-0">
        <HomeIcon className="stroke-secondarylight dark:stroke-primary" />
      </div>
      <span className="ml-4">{children}</span>
    </li>
  );
}
