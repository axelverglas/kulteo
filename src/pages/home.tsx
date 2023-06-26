import Hero from '@/components/Home/Hero';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import { CulturalPlace, Event, Type } from '../../typings';
import { fetchAllCulturalPlaces } from '@/utils/fetchCulturalPlaces';
import Card from '@/components/Card';
import { urlFor } from '@/sanity';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { useState } from 'react';
import ToggleButton from '@/components/ToggleButton';
import { fetchAllEvents } from '@/utils/fetchEvents';
import Heading from '@/components/Heading';
import { fetchTypes } from '@/utils/fetchTypes';
import FilterButton from '@/components/FilterButton';

interface Props {
  culturalPlace: CulturalPlace[];
  events: Event[];
  types: Type[];
}

export default function Dashboard({ culturalPlace, events, types }: Props) {
  const [variant, setVariant] = useState('culturalPlaces');
  const [filter, setFilter] = useState('');
  const [filteredCulturalPlaces, setFilteredCulturalPlaces] =
    useState(culturalPlace);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleClick = () => {
    setVariant(variant === 'culturalPlaces' ? 'events' : 'culturalPlaces');
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
    setFilteredCulturalPlaces(
      culturalPlace.filter(place =>
        value === '' ? true : place.type === value
      )
    );
    setFilteredEvents(
      events.filter(event => (value === '' ? true : event.type === value))
    );
  };
  return (
    <Layout>
      <Hero />
      <Section>
        <Container>
          <div className="overflow-x-auto">
            <div className="inline-flex space-x-4">
              <FilterButton
                active={filter === ''}
                onClick={() => handleFilterChange('')}
              >
                Tous
              </FilterButton>
              {types.map(type => (
                <FilterButton
                  key={type._id}
                  active={filter === type.title}
                  onClick={() => handleFilterChange(type.title)}
                >
                  {type.title}
                </FilterButton>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-14">
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-6">
                <ToggleButton
                  variant={variant}
                  activeVariant="culturalPlaces"
                  onClick={handleClick}
                >
                  Lieux
                </ToggleButton>
                <div className="h-6 w-px rounded-xl bg-jetdark opacity-40 dark:bg-whitesmoke"></div>
                <ToggleButton
                  variant={variant}
                  activeVariant="events"
                  onClick={handleClick}
                >
                  Évènements
                </ToggleButton>
              </div>
            </div>

            <div>
              {variant === 'culturalPlaces' ? (
                <>
                  <Heading level="h2" className="mb-6">
                    Ces{' '}
                    <span className="text-secondarylight dark:text-primary">
                      lieux culturels
                    </span>{' '}
                    vont vous intéresser
                  </Heading>
                  {filteredCulturalPlaces.length > 0 ? (
                    <>
                      <p className="mb-6">
                        {filteredCulturalPlaces.length} résultat
                        {filteredCulturalPlaces.length > 1 ? 's' : ''}
                      </p>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
                        {filteredCulturalPlaces.map(place => (
                          <Card
                            key={place._id}
                            title={place.name}
                            description={place.description}
                            address={place.address}
                            image={urlFor(place.images).url()}
                            type={place.type}
                            link={`/places/${place.slug.current}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-left">Aucun lieu pour le moment</p>
                  )}
                </>
              ) : (
                <>
                  <Heading level="h2" className="mb-6">
                    Ces{' '}
                    <span className="text-secondarylight dark:text-primary">
                      évènements
                    </span>{' '}
                    vont vous intéresser
                  </Heading>
                  {filteredEvents.length > 0 ? (
                    <>
                      <p className="mb-6">
                        {filteredEvents.length} résultat
                        {filteredEvents.length > 1 ? 's' : ''}
                      </p>
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-20">
                        {filteredEvents.map(event => (
                          <Card
                            key={event._id}
                            title={event.name}
                            description={event.description}
                            address={event.address}
                            image={urlFor(event.images).url()}
                            type={event.type}
                            link={`/events/${event.slug.current}`}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-left">Aucun évènement pour le moment</p>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const culturalPlace: CulturalPlace[] = await fetchAllCulturalPlaces();
  const events: Event[] = await fetchAllEvents();
  const types: Type[] = await fetchTypes();

  return {
    props: {
      culturalPlace,
      events,
      types,
    },
  };
};
