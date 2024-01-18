export type Destionation = {
  slug: string;
  title: string;
  description: string;
  image: string;
  rate?: number;
}

export const dataTravelPackage: Destionation[] = [
  {
    slug: 'pura-tanah-lot',
    title: 'Pura Tanah Lot',
    description: 'Tanah Lot Temple is a sea temple where the gods of the sea are worshiped. Tanah Lot which means cougharang in the middle of the ocean. Tanah Lot is famous as a beautiful place to watch the sunset.',
    image: '/images/tanah-lot.webp',
    rate: 4.9
  },
  {
    slug: 'bedugul',
    title: 'Bedugul',
    description: 'Ulun Danu Beratan Temple is a place to worship Dewi Danu, the ruler of the lake and also Dewi Sri, the goddess of rice. The temple is located in the middle of Lake Beratan, Bedugul. This temple has an unspoken panoramic beauty, which is at an altitude of 850 meters above sea level.',
    image: '/images/bedugul.webp',
    rate: 4.8
  },
  {
    slug: 'nusa-penida',
    title: 'Nusa Penida',
    description: 'Nusa Penida is one of the islands in Bali. Nusa Penida has an amazing natural beauty. Nusa Penida has very beautiful beaches and has very clear water.',
    image: '/images/nusa-penida.webp',
    rate: 4.9
  },
  {
    slug: 'gwk',
    title: 'Garuda Wisnu Kencana',
    description: 'Garuda Wisnu Kencana is a statue of Lord Vishnu riding a Garuda bird. This statue is the largest statue in the world. This statue is 120 meters high and 64 meters wide.',
    image: '/images/gwk.webp',
    rate: 4.7
  }
]
