import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { siteConfig } from '@/config';
import About from '@/components/Landing/About';
import Newsletter from '@/components/Landing/Newsletter';
import Hero from '@/components/Landing/Hero';
import DefaultLayout from '@/components/Landing/DefaultLayout';
import Audience from '@/components/Landing/Audience';
import Solution from '@/components/Landing/Solution';
import Number from '@/components/Landing/Number';

export default function Home() {
  const title = `${siteConfig.name}, la plateforme qui rend la culture accessible à tous`;

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Découvrez lieux et événements culturels, explorez, rencontrez et partagez des moments uniques à portée de clic avec Kulteo, un monde de culture sans limites."
        />
      </Head>
      <DefaultLayout>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Hero />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <About />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Audience />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Solution />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Number />
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Newsletter />
        </motion.div>
      </DefaultLayout>
    </>
  );
}
