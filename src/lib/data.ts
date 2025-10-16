import type { Service, Post, PricingTier, FaqItem } from './types';
import placeholderImages from './placeholder-images.json';

const findImage = (id: string) => placeholderImages.placeholderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/default/800/600';

export const services: Service[] = [
  {
    slug: 'plumbing',
    title: 'Plumbing Services',
    description: 'Reliable solutions for all your plumbing needs, from leaky faucets to pipe installations.',
    longDescription: "Our expert plumbers provide a wide range of services to ensure your home's plumbing system is functioning perfectly. We handle everything from emergency repairs to new installations with professionalism and care. Our services include leak detection, drain cleaning, water heater installation and repair, and full-scale piping and re-piping projects.",
    image: findImage('service-plumbing'),
    pricingTiers: [
      { name: 'Basic Repair', price: '$99+', features: ['Single fixture repair (faucet, toilet)', 'Leak assessment', '1-hour service block'] },
      { name: 'Standard Service', price: '$249+', features: ['Includes Basic Repair', 'Drain cleaning (one line)', 'Water heater flush', 'Up to 3 hours service'], isFeatured: true },
      { name: 'Major Installation', price: 'Quote-based', features: ['Full system installation', 'Bathroom/Kitchen remodel piping', 'Sewer line repair', 'Custom project plan & consultation'] },
    ],
    faq: [
      { question: 'Do you offer 24/7 emergency services?', answer: 'Yes, we offer 24/7 emergency plumbing services. Please call our emergency line for immediate assistance.' },
      { question: 'Are your plumbers licensed and insured?', answer: 'Absolutely. All our plumbers are fully licensed, bonded, and insured for your peace of mind.' },
      { question: 'What is your service area?', answer: 'We serve the greater metropolitan area. Contact us with your address to confirm if you are within our service range.' },
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical Services',
    description: 'Safe and certified electrical work for your home or business, from wiring to fixture installation.',
    longDescription: 'Our certified electricians are equipped to handle any electrical challenge, ensuring safety and compliance with all regulations. Services range from simple outlet replacements to complex whole-home rewiring, smart home installations, and electrical panel upgrades. We prioritize safety and quality in every job.',
    image: findImage('service-electrical'),
    pricingTiers: [
      { name: 'Minor Electrical', price: '$120+', features: ['Outlet/Switch replacement', 'Fixture installation (pre-wired)', 'Diagnostic assessment'] },
      { name: 'Standard Electrical', price: '$350+', features: ['New circuit installation', 'Ceiling fan installation', 'Smart home device setup'], isFeatured: true },
      { name: 'Major Electrical', price: 'Quote-based', features: ['Full home rewiring', 'Electrical panel upgrade', 'EV charger installation', 'Custom lighting design'] },
    ],
    faq: [
      { question: 'Can you install smart home devices?', answer: 'Yes, we specialize in installing a wide range of smart home devices, including thermostats, lighting, and security systems.' },
      { question: 'Is my home\'s wiring up to code?', answer: 'We can perform a full electrical inspection to ensure your home meets all current safety standards and building codes.' },
    ],
  },
  {
    slug: 'carpentry',
    title: 'Carpentry Services',
    description: 'Custom carpentry and woodworking to enhance the beauty and function of your space.',
    longDescription: 'From custom-built furniture and shelving to structural repairs and trim work, our skilled carpenters bring craftsmanship and precision to every project. We work with a variety of materials to create beautiful, durable, and functional additions to your home or business.',
    image: findImage('service-carpentry'),
    pricingTiers: [
      { name: 'Small Projects', price: '$150+', features: ['Trim/molding repair', 'Door adjustments', 'Shelf installation'] },
      { name: 'Custom Builds', price: 'Quote-based', features: ['Custom bookcases', 'Built-in cabinets', 'Window seats', 'Detailed design process'], isFeatured: true },
      { name: 'Structural Work', price: 'Quote-based', features: ['Deck construction/repair', 'Framing and structural repairs', 'Pergolas and outdoor structures'] },
    ],
    faq: [
      { question: 'Can you match existing woodwork in my home?', answer: 'Yes, we take great care to match existing styles, wood types, and finishes for a seamless integration.' },
      { question: 'What is the process for a custom build?', answer: 'We start with a design consultation, provide detailed plans and a quote, and then move to fabrication and installation, keeping you informed every step of the way.' },
    ],
  },
  {
    slug: 'appliances',
    title: 'Appliance Repair',
    description: 'Fast and effective repair for all major home appliances, extending their life and performance.',
    longDescription: 'Don\'t rush to replace a faulty appliance. Our technicians can diagnose and repair a wide range of issues on major brands of refrigerators, ovens, dishwashers, washers, and dryers. We provide prompt service to get your household running smoothly again.',
    image: findImage('service-appliances'),
    pricingTiers: [
      { name: 'Diagnostic Visit', price: '$89', features: ['Full appliance diagnosis', 'Repair cost estimate', 'Fee waived if repair is approved'] },
      { name: 'Standard Repair', price: '$150 - $300', features: ['Covers most common parts and labor', '90-day warranty on repairs'], isFeatured: true },
      { name: 'Complex Repair', price: 'Quote-based', features: ['Major component replacement (compressor, motor)', 'Sealed system repairs'] },
    ],
    faq: [
      { question: 'What appliance brands do you service?', answer: 'We service all major brands, including Whirlpool, GE, Samsung, LG, Bosch, and many more.' },
      { question: 'Is it worth repairing my old appliance?', answer: 'We provide an honest assessment. If a repair is not cost-effective, we will let you know and can advise on a replacement.' },
    ],
  },
  {
    slug: 'painting',
    title: 'Painting Services',
    description: 'Professional interior and exterior painting services for a fresh, new look.',
    longDescription: 'A fresh coat of paint can transform a space. Our professional painters handle everything from preparation (sanding, patching, priming) to the final, flawless coat. We offer interior, exterior, and cabinetry painting, using high-quality paints for a durable and beautiful finish.',
    image: findImage('service-painting'),
    pricingTiers: [
      { name: 'Single Room', price: '$400+', features: ['One standard-sized room', 'Walls only', 'Includes minor prep work'] },
      { name: 'Interior Package', price: 'Quote-based', features: ['Multiple rooms or whole interior', 'Walls, trim, and ceilings', 'Color consultation available'], isFeatured: true },
      { name: 'Exterior Painting', price: 'Quote-based', features: ['Full exterior painting', 'Includes power washing and prep', 'Deck and fence staining'] },
    ],
    faq: [
      { question: 'Do I need to supply the paint?', answer: 'We can supply high-quality paint from trusted brands, or we can use a paint that you provide.' },
      { question: 'How do you protect my furniture and floors?', answer: 'We take extensive measures to protect your property, including using drop cloths, plastic sheeting, and painter\'s tape.' },
    ],
  },
  {
    slug: 'cleaning',
    title: 'Cleaning Services',
    description: 'Thorough and reliable cleaning services for homes and offices.',
    longDescription: 'Reclaim your time and enjoy a sparkling clean space. We offer a range of cleaning services, including recurring maid service, deep cleaning, and move-in/move-out cleaning. Our professional team is trustworthy, efficient, and uses eco-friendly products upon request.',
    image: findImage('service-cleaning'),
    pricingTiers: [
      { name: 'Standard Clean', price: '$120+', features: ['Recurring service (weekly/bi-weekly)', 'Covers all main living areas', 'Kitchen and bathroom cleaning'] },
      { name: 'Deep Clean', price: '$300+', features: ['Intensive, top-to-bottom cleaning', 'Ideal for first-time or seasonal cleaning', 'Includes baseboards, blinds, etc.'], isFeatured: true },
      { name: 'Move-In/Out Clean', price: 'Quote-based', features: ['Ensures a spotless space for moving', 'Includes inside of cabinets and appliances'] },
    ],
    faq: [
      { question: 'Are you insured and bonded?', answer: 'Yes, our cleaning service is fully insured and bonded for your protection and peace of mind.' },
      { question: 'Do I need to be home for the cleaning?', answer: 'No, you do not. Most of our clients provide a key or code for entry, so we can clean while they are at work or away.' },
    ],
  },
];

export const posts: Post[] = [
    {
        id: '1',
        title: '10 Essential Home Maintenance Tips Every Homeowner Should Know',
        slug: '10-essential-home-maintenance-tips',
        excerpt: 'Keep your home in top shape and prevent costly repairs with our checklist of essential maintenance tasks. From your plumbing to your roof, we\'ve got you covered.',
        content: `
## Introduction
Maintaining your home is crucial for protecting your investment and ensuring a safe, comfortable living environment. Regular maintenance can prevent small issues from becoming expensive disasters. Here are 10 essential tips to get you started.

### 1. Inspect and Clean Your Gutters
Clogged gutters can cause water damage to your roof and foundation. Clean them at least twice a year, in the spring and fall.

### 2. Check for Leaks
Regularly inspect under sinks, around toilets, and near water heaters for any signs of moisture. A small leak can lead to mold and significant water damage if left unchecked.
`,
        tags: ['home maintenance', 'tips'],
        coverImage: findImage('blog-post-1'),
        author: { name: 'Admin User', avatar: 'https://picsum.photos/seed/admin/40/40' },
        createdAt: '2024-05-20T10:00:00Z',
        published: true,
    },
    {
        id: '2',
        title: 'The Ultimate Guide to Choosing the Right Paint Finish',
        slug: 'guide-to-choosing-paint-finish',
        excerpt: 'Matte, eggshell, satin, semi-gloss... The choices can be overwhelming. Our guide breaks down the pros and cons of each paint finish to help you decide.',
        content: `
## Understanding Paint Sheens
The "finish" or "sheen" of a paint refers to how much light it reflects. This not only affects the look of the color but also the durability of the paint.

### Matte (Flat)
- **Pros:** Hides imperfections well, creates a smooth, modern look.
- **Cons:** Least durable, difficult to clean.
- **Best for:** Low-traffic areas like adult bedrooms and ceilings.
`,
        tags: ['painting', 'diy', 'interior design'],
        coverImage: findImage('blog-post-2'),
        author: { name: 'Jane Doe', avatar: 'https://picsum.photos/seed/jane/40/40' },
        createdAt: '2024-05-15T14:30:00Z',
        published: true,
    },
    {
        id: '3',
        title: 'Smart Home 101: Where to Start?',
        slug: 'smart-home-101',
        excerpt: 'Thinking about making your home smarter? We explore the best entry-level smart home devices, from smart speakers to lighting and thermostats.',
        content: `
## Your First Step into a Smarter Home
The world of smart home technology can seem complex, but getting started is easier than you think. A few key devices can make a big impact on your home's convenience and efficiency.

### Start with a Hub
A smart speaker like an Amazon Echo or Google Nest Hub acts as the central brain for your smart home, allowing you to control devices with your voice.
`,
        tags: ['smart home', 'technology', 'electrical'],
        coverImage: findImage('blog-post-3'),
        author: { name: 'Admin User', avatar: 'https://picsum.photos/seed/admin/40/40' },
        createdAt: '2024-05-10T09:00:00Z',
        published: true,
    },
];

export const pricingPlans: PricingTier[] = [
    {
        name: 'Basic Home Care',
        price: '$49/mo',
        features: ['Annual HVAC inspection', 'Annual plumbing inspection', 'Priority scheduling', '10% off repairs'],
    },
    {
        name: 'Premium Home Care',
        price: '$99/mo',
        features: ['Includes all Basic features', 'Gutter cleaning (2x a year)', 'Smoke detector battery replacement', '15% off repairs'],
        isFeatured: true,
    },
    {
        name: 'Business Pro',
        price: 'Contact Us',
        features: ['Customized maintenance plan', 'Dedicated account manager', '24/7 emergency priority', 'Volume discounts'],
    }
];
