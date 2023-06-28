import { CulturalPlace } from '../../typings';

export const fetchAllCulturalPlaces = async (): Promise<CulturalPlace[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllCulturalPlaces`
  );
  const { culturalPlace } = await res.json();
  return culturalPlace;
};

export const fetchOneCulturalPlaces = async (
  slug: string
): Promise<CulturalPlace> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getOneCulturalPlace?slug=${slug}`
  );
  const { culturalPlace } = await res.json();
  return culturalPlace;
};
