import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { limitTitleLength } from '@/utils/limitTitleWords';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share';

const currentURL = typeof window !== 'undefined' ? window.location.href : '';

export default function ToggleShare({ description }: { description: string }) {
  const descriptionTwitter = limitTitleLength(description, 25);
  const share = [
    {
      value: 'facebook',
      icon: FaFacebook,
      component: (
        <FacebookShareButton url={currentURL} quote={description}>
          <FaFacebook className="h-7 w-7 hover:text-primary" />
        </FacebookShareButton>
      ),
    },
    {
      value: 'whatsapp',
      icon: FaWhatsapp,
      component: (
        <WhatsappShareButton url={currentURL} title={description}>
          <FaWhatsapp className="h-7 w-7 hover:text-primary" />
        </WhatsappShareButton>
      ),
    },
    {
      value: 'twitter',
      icon: FaTwitter,
      component: (
        <TwitterShareButton url={currentURL} title={descriptionTwitter}>
          <FaTwitter className="h-7 w-7 hover:text-primary" />
        </TwitterShareButton>
      ),
    },
    {
      value: 'linkedin',
      icon: FaLinkedin,
      component: (
        <LinkedinShareButton url={currentURL} summary={description}>
          <FaLinkedin className="h-7 w-7 hover:text-primary" />
        </LinkedinShareButton>
      ),
    },
  ];

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(currentURL);
      setIsCopied(true);
      toast.success('Lien copié');
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  return (
    <Listbox>
      <Listbox.Button type="button" className="outline-none">
        <span className="dark:inline">
          <IoShareSocialOutline className="text-3xl" />
        </span>
      </Listbox.Button>
      <div className="relative">
        <Listbox.Options
          className={clsx(
            'absolute right-[-50px] top-[30px] z-40 h-auto w-[190px] rounded-lg border bg-slate-50 p-4 text-sm font-semibold shadow-light outline-none dark:border-jetdark dark:bg-night dark:shadow-night'
          )}
        >
          <div className="flex flex-col items-center gap-y-6">
            <div className="flex w-full justify-between">
              {share.map(({ value, component }) => (
                <Listbox.Option key={value} value={value}>
                  {component}
                </Listbox.Option>
              ))}
            </div>
            <Listbox.Option className="w-full" as="div" key="link" value="link">
              <div className="relative flex w-full items-center rounded-full border border-grayishblue bg-slate-50 shadow-light dark:border-jetdark dark:bg-black dark:shadow-night">
                <button
                  onClick={handleCopyLink}
                  className="flex h-8 w-full items-center justify-center gap-x-4 rounded-full border-2 border-night hover:border-primary hover:text-primary dark:border-white dark:hover:border-primary"
                >
                  {isCopied ? 'Copié' : 'Copier'}
                </button>
              </div>
            </Listbox.Option>
          </div>
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
