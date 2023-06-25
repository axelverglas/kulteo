import { ReactNode } from 'react';

export default function Section({ children }: { children: ReactNode }) {
  return <section className="pb-14">{children}</section>;
}
