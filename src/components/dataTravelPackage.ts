export type Destionation = {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rate?: number;
}

export const dataTravelPackage: Destionation[] = [
  {
    slug: 'pura-tanah-lot',
    title: 'Pura Tanah Lot',
    description: 'Pura Tanah Lot merupakan pura laut tempat pemujaan dewa-dewa penjaga laut. Tanah Lot yang artinya batukarang yang berada di tengah lautan. Tanah Lot terkenal sebagai tempat yang indah untuk melihat matahari terbenam',
    image: '/images/tanah-lot.webp',
    price: 2000000,
    rate: 4.9
  },
  {
    slug: 'bedugul',
    title: 'Bedugul',
    description: 'Pura Ulun Danu Beratan merupakan tempat menyembah Dewi Danu sang penguasa Danau dan juga Dewi Sri yaitu Dewi Padi. Pura ini berada di tengah Danau Beratan, Bedugul. Pura ini memiliki merupakan keindahan panorama tak terucapkan, yang berada pada ketinggian 850 M di atas permukaan laut',
    image: '/images/bedugul.webp',
    price: 1500000,
    rate: 4.8
  },
  {
    slug: 'nusa-penida',
    title: 'Nusa Penida',
    description: 'Nusa Penida merupakan salah satu pulau yang berada di Bali. Nusa Penida memiliki keindahan alam yang sangat menakjubkan. Nusa Penida memiliki pantai yang sangat indah dan memiliki air yang sangat jernih',
    image: '/images/nusa-penida.webp',
    price: 2500000,
    rate: 4.9
  },
  {
    slug: 'gwk',
    title: 'Garuda Wisnu Kencana',
    description: 'Garuda Wisnu Kencana merupakan patung Dewa Wisnu yang sedang mengendarai burung Garuda. Patung ini merupakan patung terbesar di dunia. Patung ini memiliki tinggi 120 meter dengan lebar 64 meter',
    image: '/images/gwk.webp',
    price: 1000000,
    rate: 4.7
  }
]
