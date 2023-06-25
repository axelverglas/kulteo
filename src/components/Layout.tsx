import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useState } from 'react';
import useMedia from '@/hooks/useMedia';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const mdUp = useMedia('(min-width: 768px)');

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const handleMobileClick = () => {
    setMobileSidebarOpen(!isMobileSidebarOpen);
  };
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <Sidebar
          mdUp={mdUp}
          open={open}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setMobileSidebarOpen={setMobileSidebarOpen}
          handleButtonClick={handleButtonClick}
          handleMobileClick={handleMobileClick}
        />
        <div
          className={`z-10 flex flex-1 flex-grow flex-col bg-transparent ${
            isMobileSidebarOpen && !mdUp && 'blur-sm'
          }`}
        >
          <Header handleMobileClick={handleMobileClick} />
          <main className="flex-grow pb-14 pt-8 lg:pb-20 lg:pt-8 [&>*:last-child]:p-0">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
