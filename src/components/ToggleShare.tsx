import { Menu } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import clsx from 'clsx';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaLink,
} from 'react-icons/fa';

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'next-share';

export default function ToggleShare({ description }: { description: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch(error => {
        console.error('Failed to copy link:', error);
      });
  };
  const currentURL = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <Menu>
      <Menu.Button type="button" className="outline-none">
        <span className="dark:inline">
          <IoShareSocialOutline className="text-3xl" />
        </span>
      </Menu.Button>
      <div className="relative">
        <Menu.Items
          className={clsx(
            'absolute right-[-50px] top-[30px] z-40 h-auto w-[190px] rounded-lg border bg-slate-50 p-4 text-sm font-semibold shadow-light outline-none dark:border-jetdark dark:bg-night dark:shadow-night'
          )}
        >
          <div className="flex flex-col items-center gap-y-6">
            <div className="flex w-full gap-4">
              <Menu.Item>
                <FacebookShareButton url={currentURL} quote={description}>
                  <FaFacebook className="h-7 w-7 hover:text-primary" />
                </FacebookShareButton>
              </Menu.Item>

              <Menu.Item>
                <TwitterShareButton
                  url={currentURL}
                  title={description + currentURL}
                >
                  <FaTwitter className="h-7 w-7 hover:text-primary" />
                </TwitterShareButton>
              </Menu.Item>

              <Menu.Item>
                <WhatsappShareButton url={currentURL} title={description}>
                  <FaWhatsapp className="h-7 w-7 hover:text-primary" />
                </WhatsappShareButton>
              </Menu.Item>

              <Menu.Item>
                <LinkedinShareButton url={currentURL} summary={description}>
                  <FaLinkedin className="h-7 w-7 hover:text-primary" />
                </LinkedinShareButton>
              </Menu.Item>
            </div>
            <Menu.Item>
              <button
                onClick={handleCopyLink}
                className="flex h-8 w-full items-center justify-center gap-x-4 rounded-full border-2 border-night hover:border-primary hover:text-primary dark:border-white dark:hover:border-primary"
              >
                <FaLink />
                {isCopied ? 'Copié!' : 'Copier le lien'}
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
}
