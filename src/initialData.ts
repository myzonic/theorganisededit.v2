import { Service, BeforeAfterItem, Testimonial, SiteSettings, Enquiry } from './types';

export const initialServices: Service[] = [
  {
    id: 'the-reset',
    name: 'The Reset',
    category: 'half-day',
    duration: 'Up to 4 Hours',
    price: 240,
    description: 'Perfect for a single space that needs a refresh.'
  },
  {
    id: 'home-refresh',
    name: 'The Home Refresh',
    category: 'half-day',
    duration: 'Up to 6 Hours',
    price: 360,
    description: 'Our most popular package for a half-day transformation.'
  },
  {
    id: 'whole-home-edit',
    name: 'The Whole Home Edit',
    category: 'full-day',
    duration: '3+ spaces',
    price: 600,
    priceSuffix: 'From',
    description: 'A complete home reset over multiple days.'
  },
  {
    id: 'family-adhd-edit',
    name: 'Family & ADHD Edit',
    category: 'full-day',
    duration: 'ADHD friendly',
    price: 280,
    priceSuffix: 'From',
    description: 'Gentle systems designed for neurodiverse and busy family homes.'
  },
  {
    id: 'wardrobe-edit',
    name: 'Wardrobe Edit & Styling',
    category: 'half-day',
    duration: 'Clothing reset',
    price: 220,
    priceSuffix: 'From',
    description: 'Declutter, organise and rediscover your style.'
  },
  {
    id: 'discovery-call',
    name: 'Complimentary Discovery Call',
    category: 'free',
    duration: '15-Minute Consultation',
    price: 0,
    description: 'No obligation, just a friendly, judgment-free phone chat.'
  }
];

export const initialBeforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'office-reset',
    title: 'The Home Office Productivity Reset',
    spaceType: 'Home Office & Study',
    description: 'A busy home office edited to remove visual clutter and cable chaos, creating an inviting, focused environment with uniform desk styling and neat shelving storage.',
    beforeImage: '/src/assets/images/set1_before_1783406731767.jpg',
    afterImage: '/src/assets/images/set1_after_1783406749592.jpg'
  },
  {
    id: 'playroom-reset',
    title: 'Sensory-Friendly Playroom Organisation',
    spaceType: 'Children\'s Playroom',
    description: 'Replaced scattered toy chaos with low-profile, child-friendly soft containers on accessible light wood shelves, fostering independent play and calm routines.',
    beforeImage: '/src/assets/images/set2_before_1783406769409.jpg',
    afterImage: '/src/assets/images/set2_after_1783406786754.jpg'
  },
  {
    id: 'closet-styling',
    title: 'Bespoke Walk-In Wardrobe Styling',
    spaceType: 'Master Bedroom Walk-In Closet',
    description: 'A luxury dressing room transformed from laundry-day disorder into a boutique experience, using uniform wooden hangers, categorized seasonal edits, and an elegant styled island.',
    beforeImage: '/src/assets/images/set3_before_1783406801356.jpg',
    afterImage: '/src/assets/images/set3_after_1783406816863.jpg'
  },
  {
    id: 'bedroom-serenity',
    title: 'Master Bedroom Sanctuary Edit',
    spaceType: 'Master Bedroom',
    description: 'Restored bedroom calm by clearing bedside clutter, organizing loose garments into stylish storage trunks, and styling crisp organic linen for a restful retreat.',
    beforeImage: '/src/assets/images/set4_before_1783406836206.jpg',
    afterImage: '/src/assets/images/set4_after_1783406851334.jpg'
  },
  {
    id: 'living-kitchen-open-plan',
    title: 'Open-Plan Living & Kitchen Refresh',
    spaceType: 'Open-Plan Family Space',
    description: 'An expansive family living area decluttered and re-styled. We organized books and toys, cleared kitchen counter clutter, and introduced calming styling details to the coffee table and sofa.',
    beforeImage: '/src/assets/images/set5_before_1783406884996.jpg',
    afterImage: '/src/assets/images/set5_after_1783406903340.jpg'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'review-1',
    author: 'Sarah M.',
    location: 'Altrincham, Manchester',
    rating: 5,
    text: 'As an ADHD mother of three, my house was in constant chaos. Beth and Danielle came in with zero judgment, infinite kindness, and put together simple, intuitive systems that my brain can actually maintain. It has literally changed how our home functions.',
    tag: 'ADHD-Friendly Reset'
  },
  {
    id: 'review-2',
    author: 'Emily & Jack',
    location: 'Didsbury, Manchester',
    rating: 5,
    text: 'We booked the Lifestyle Edit before welcoming our second baby. They transformed our messy spare room into a functional nursery and kitchen utility that brings us so much peace. They used 80% of what we already had, which we loved!',
    tag: 'The Lifestyle Edit'
  },
  {
    id: 'review-3',
    author: 'Claire T.',
    location: 'Hale, Cheshire',
    rating: 5,
    text: 'The Moving Edit was worth every single penny. They packed with precision, decluttered before the transition, and our wardrobes were perfectly set up on day one. Simply outstanding, luxury service.',
    tag: 'The Moving Edit'
  }
];

export const initialSettings: SiteSettings = {
  heroTitle: 'THE ORGANISED EDIT',
  heroSubtitle: 'HOME • STYLE • ORGANISATION',
  heroDescription: 'Beautiful, intuitive systems designed for real family life. Manchester-based home styling and organisation tailored to simplify your routines and create calm, judgement-free spaces, with dedicated support for neurodiverse households.',
  aboutTitle: 'Meet Beth & Danielle',
  aboutText1: 'We\'re Beth and Danielle, professional stylists and organisers with a passion for creating beautiful, functional homes that work for real life. With years of experience in styling and a deep understanding of how our environments affect our everyday, we help busy families edit their spaces, wardrobes and routines so life feels a little lighter and a lot more calm.',
  aboutText2: 'Two stylists. Two mums. One mission. With 20+ years in fashion, style and brand between us, we created The Organised Edit to help families love their homes for real and make space for what matters. We understand the chaotic reality of family routines, which is why our solutions are strictly practical, durable, and styled with high-end aesthetic value.',
  aboutQuote: 'Beautifully organised homes, thoughtfully designed for real life.',
  contactPhone: '+44 7792 888421',
  contactEmail: 'hello@theorganisededit.co.uk',
  contactInstagram: 'theorganisededit',
  contactWhatsapp: '447792888421',
  locationArea: 'Manchester & Surrounding Areas'
};

export const initialEnquiries: Enquiry[] = [
  {
    id: 'enq-1',
    name: 'Rebecca Davies',
    email: 'rebecca@example.com',
    phone: '07812 345678',
    serviceId: 'family-adhd-edit',
    neurodiverseFocused: true,
    details: 'Looking to organise our family playroom and kitchen. My son is autistic and gets overwhelmed by visual clutter, so we\'d love toy storage solutions that are closed and calming.',
    date: '2026-07-04T14:30:00.000Z',
    status: 'New'
  },
  {
    id: 'enq-2',
    name: 'James Wilson',
    email: 'james.w@example.com',
    phone: '07987 654321',
    serviceId: 'wardrobe-edit',
    neurodiverseFocused: false,
    details: 'Master bedroom wardrobe is bursting at the seams. Need help purging clothes and setting up a minimalist, color-coded wardrobe.',
    date: '2026-07-05T09:15:00.000Z',
    status: 'Contacted'
  }
];
