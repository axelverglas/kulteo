import { HomeIcon } from './Icons';

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
