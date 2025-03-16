"use client";

import { motion } from "framer-motion";
import SpotifyPlayer from "./spotify-player";
import SectionHeading from "./section-heading";

export default function AnimatedSpotifySection() {
  return (
    <motion.section
      className="scroll-mt-28 mb-16 max-w-[53rem]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading>Now Listening To</SectionHeading>
      <SpotifyPlayer 
        playlistId="37i9dQZF1Eptgqta8W2Z2t"
        width={300}
        height={380}
      />
    </motion.section>
  );
} 