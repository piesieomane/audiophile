
export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  category: 'headphones' | 'speakers' | 'earphones';
  price: number;
  description: string;
  features: string;
  includes: Array<{
    quantity: number;
    item: string;
  }>;
  gallery: {
    first: string;
    second: string;
    third: string;
  };
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  others: Array<{
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }>;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    shortName: "XX99 MK II",
    category: "headphones",
    price: 2999,
    new: true,
    description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who enjoy long listening sessions. In addition to exceptional build quality, the XX99 Mark II headphones feature the latest in wireless technology. Our advanced 40mm drivers are engineered to provide the most natural and accurate audio reproduction possible.\n\nAs the flagship product in our line, the XX99 Mark II headphones set new standards in audio fidelity and comfort. The thoughtfully designed ergonomics ensure that these headphones can be worn for hours without discomfort, making them perfect for both casual listening and professional use.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" }
    ],
    gallery: {
      first: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      second: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      third: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    },
    image: {
      mobile: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
    },
    categoryImage: {
      mobile: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
    },
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80"
        }
      }
    ]
  },
  {
    id: 2,
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    shortName: "XX99 MK I",
    category: "headphones",
    price: 1750,
    new: false,
    description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features: "Refined acoustics combine with premium build quality in the XX99 Mark I headphones. The closed-back, over-ear design perfectly isolates you from your environment, allowing you to focus on what matters most - your music.\n\nThe dual-driver design features a 40mm dynamic driver for deep, controlled bass and a custom tweeter for crystal-clear highs. The result is a balanced sound signature that faithfully reproduces every nuance of your favorite tracks.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" }
    ],
    gallery: {
      first: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      second: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      third: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80"
    },
    image: {
      mobile: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80"
    },
    categoryImage: {
      mobile: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80"
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
        }
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80"
        }
      }
    ]
  },
  {
    id: 3,
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    shortName: "XX59",
    category: "headphones",
    price: 899,
    new: false,
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design makes it ideal for travel, while its unique fabric headband offers superior comfort for long listening sessions.\n\nThe XX59 features premium 40mm drivers that deliver clear, balanced audio with excellent bass response. Whether you're listening to music, taking calls, or enjoying podcasts, the XX59 provides an exceptional listening experience at an affordable price point.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" }
    ],
    gallery: {
      first: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      second: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      third: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80"
    },
    image: {
      mobile: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80"
    },
    categoryImage: {
      mobile: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&q=80"
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
        }
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200&q=80"
        }
      }
    ]
  },
  {
    id: 4,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    shortName: "ZX9",
    category: "speakers",
    price: 4500,
    new: true,
    description: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo 3.5mm inputs, allowing you to have up to 5 wired source connections at once. This means you can connect to your computer, phone, tablet, record player, and TV simultaneously.\n\nThe ZX9 is equipped with high-end drivers that deliver exceptional clarity and deep bass response. The built-in amplifier provides 200 watts of clean power, ensuring your music sounds exactly as the artist intended.",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 10m audio cable" },
      { quantity: 1, item: "10m optical cable" }
    ],
    gallery: {
      first: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      second: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      third: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    image: {
      mobile: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=80"
    },
    categoryImage: {
      mobile: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=80"
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=80"
        }
      },
      {
        slug: "yx1-earphones",
        name: "YX1 Earphones",
        image: {
          mobile: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=80"
        }
      }
    ]
  },
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    shortName: "ZX7",
    category: "speakers",
    price: 3500,
    new: false,
    description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound.\n\nBuilt with premium components and exceptional engineering, the ZX7 delivers room-filling sound with precise imaging and natural tonal balance. Whether you're enjoying music, movies, or games, the ZX7 provides an immersive audio experience.",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 7.5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" }
    ],
    gallery: {
      first: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      second: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
      third: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    image: {
      mobile: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=80"
    },
    categoryImage: {
      mobile: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&q=80"
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=80"
        }
      },
      {
        slug: "yx1-earphones",
        name: "YX1 Earphones",
        image: {
          mobile: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=80"
        }
      }
    ]
  },
  {
    id: 6,
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    shortName: "YX1",
    category: "earphones",
    price: 599,
    new: true,
    description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features: "Experience unrivaled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort and exceptional noise isolation.\n\nThe YX1 features custom-tuned drivers that deliver rich, detailed sound across the entire frequency spectrum. Advanced noise cancellation technology ensures that you can enjoy your music without distractions, whether you're commuting, working out, or simply relaxing at home.",
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" }
    ],
    gallery: {
      first: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      second: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80",
      third: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
    },
    image: {
      mobile: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=80"
    },
    categoryImage: {
      mobile: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
      tablet: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      desktop: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&q=80"
    },
    others: [
      {
        slug: "xx99-mark-two-headphones",
        name: "XX99 Mark II",
        image: {
          mobile: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80"
        }
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
          tablet: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
          desktop: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&q=80"
        }
      }
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  return ['headphones', 'speakers', 'earphones'];
};
