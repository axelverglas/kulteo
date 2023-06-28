interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Video extends SanityBody {
  _type: 'video';
  name: string;
  slug: {
    current: string;
  };
  url: string;
  image: Image;
  type: 'relevantvideos' | 'stream';
  culturalPlace: string;
  culturalPlaceType: string;
}

interface Event extends SanityBody {
  _type: 'events';
  name: string;
  slug: {
    current: string;
  };
  type: string;
  address: string;
  description: string;
  images: Image[];
  openingHours: string[];
  website: string;
  price: string[];
  culturalPlace: CulturalPlace;
}

export interface Type extends SanityBody {
  _type: 'types';
  title: string;
  category: string;
}

export interface CulturalPlace extends SanityBody {
  _type: 'culturalPlace';
  name: string;
  slug: {
    current: string;
  };
  type: string;
  address: string;
  description: string;
  images: Image[];
  openingHours: string[];
  phoneNumber: string;
  price: string[];
  website: string;
  videos: Video[];
  relevantLinks: string[];
}
