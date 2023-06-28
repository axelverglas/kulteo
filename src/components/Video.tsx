import React from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface VideoProps {
  videoUrl: string;
  width: string;
  height: string;
}

export default function Video({ videoUrl, width, height }: VideoProps) {
  return (
    <div className="overflow-hidden rounded-lg">
      <ReactPlayer
        controls={true}
        url={videoUrl}
        width={width}
        height={height}
        className="rounded-lg"
      />
    </div>
  );
}
