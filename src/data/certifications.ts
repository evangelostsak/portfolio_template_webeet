export type Certification = {
  title: string;
  image: string; // path under public/
  href: string;  // external Credly URL
  alt?: string;
  status?: 'earned' | 'in-progress';
};

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    image: 'https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    href: 'https://www.credly.com/badges/41e54873-b4ee-42b7-8a92-a00ae3ca1bff/public_url',
    alt: 'AWS Certified Cloud Practitioner Badge',
    status: 'earned',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    image: 'https://images.credly.com/size/220x220/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
    href: 'https://www.credly.com/badges/fd81dc9b-56cd-4232-9f91-1f2c7bad3de6/public_url',
    alt: 'AWS Certified Solutions Architect – Associate Badge',
    status: 'earned',
  }
];

// NOTE: Place the image files at public/images/certifications/ with the exact filenames above.
// Recommended size: square 220x220 (PNG). They will be auto-optimized by next/image.
