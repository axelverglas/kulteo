import { Event } from '../../typings';

export const getEventsForPlace = async (placeId: string): Promise<Event[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEventsForPlace?placeId=${placeId}`
  );
  const { events } = await res.json();
  return events;
};

export const getOtherEventsForPlace = async (
  placeId: string,
  eventId: string
): Promise<Event[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getOtherEventsForPlace?placeId=${placeId}&eventId=${eventId}`
  );
  const { events } = await res.json();
  return events;
};

export const fetchOneEvent = async (slug: string): Promise<Event> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getOneEvent?slug=${slug}`
  );
  const { event } = await res.json();
  return event;
};

export const getAllOtherEvents = async (
  currentEventId: string
): Promise<Event[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllOtherEvents?currentEventId=${currentEventId}`
  );
  const { events } = await res.json();
  return events;
};

export const fetchAllEvents = async (): Promise<Event[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllEvents`
  );
  const { events } = await res.json();
  return events;
};
