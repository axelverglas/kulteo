import { IconType } from 'react-icons';
import { BsFacebook, BsInstagram, BsLinkedin, BsDiscord } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import { siteConfig } from '@/config';

function getIcon(network: string): IconType | null {
  switch (network) {
    case 'facebook':
      return BsFacebook;
    case 'instagram':
      return BsInstagram;
    case 'linkedin':
      return BsLinkedin;
    case 'discord':
      return BsDiscord;
    case 'tiktok':
      return FaTiktok;
    default:
      return null;
  }
}

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {Object.entries(siteConfig.social).map(([network, url]) => {
        const Icon = getIcon(network);
        return Icon ? (
          <Link
            href={url}
            key={network}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="hover:text-primarylight h-8 w-8 transition-all" />
          </Link>
        ) : null;
      })}
    </div>
  );
}
