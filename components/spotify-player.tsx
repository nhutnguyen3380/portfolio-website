"use client";

import { useEffect, useState } from 'react';

interface SpotifyPlayerProps {
  // You can customize these props based on your needs
  playlistId?: string;
  width?: number;
  height?: number;
}

export default function SpotifyPlayer({ 
  playlistId = "37i9dQZF1Eptgqta8W2Z2t?si=64fc9a69a13040ea", // Default to Today's Top Hits if no playlist specified
  width = 300,
  height = 380
}: SpotifyPlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="group relative bg-gray-800 border border-black/5 rounded-lg overflow-hidden hover:bg-gray-900 transition w-full max-w-[53rem] sm:w-[40rem] md:w-[45rem] lg:w-[53rem]">
      <div className="p-4">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        />
      </div>
    </div>
  );
} 