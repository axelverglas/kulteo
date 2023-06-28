import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Section from '@/components/Section';
import ListItem, { items } from '@/components/ListItem';
import Video from '../Video';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
    <Section>
      <Container>
        <div className="md:rounded-lg md:border md:border-grayishblue md:bg-slate-50 md:p-8 md:dark:border-jetdark md:dark:bg-night">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <Heading
                level="h1"
                className="leading-[2.5rem] md:leading-[3rem] lg:w-[750px]"
              >
                L&apos;écosystème qui rend la culture{' '}
                <span className="rounded-lg bg-secondarylight px-2 pb-1 pt-2 text-white dark:bg-primary dark:text-night">
                  accessible
                </span>{' '}
                à tous
              </Heading>
              <ul className="mt-8 md:w-[500px]">
                {items.map((item, index) => (
                  <ListItem key={index}>
                    {item.text}
                    <span className="font-semibold text-secondarylight dark:text-primary">
                      {item.emphasis}
                    </span>
                    {item.additionalText}
                  </ListItem>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Video
                videoUrl="https://www.youtube.com/watch?v=xKzPSdWPCLo"
                width="553px"
                height="277px"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
    </motion.div>
  );
}
