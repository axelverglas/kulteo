import { sanityClient } from '@/sanity';

export async function fetchTypes() {
  const types = await sanityClient.fetch('*[_type == "types"]');
  return types;
}
