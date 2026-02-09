export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  // 'certification' added so we can position certifications separately on the resume
  type: 'work' | 'education' | 'certification';
};

export const cvArticles: CvArticle[] = [
  {
    title: 'Software Engineer | Cloud & Security',
    org: 'Webeet',
    location: 'Berlin, Germany (Remote)',
    period: 'Oct 2024 – Present',
    bullets: [
      'Supported fast and reliable software delivery by designing, automating, and maintaining a cost-efficient AWS cloud platform.',
      'Improved release speed and consistency by developing and operating CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins) that automate build, test, and deployment workflows.',
      'Reduced operational and security risk by embedding security controls into delivery processes, including vulnerability scanning, secrets management, and access governance.',
      'Enabled scalable and resilient services by implementing Docker and Kubernetes (EKS) for rolling deployments and efficient resource usage.',
      'Increased infrastructure and pipeline reliability by applying standardized secure patterns such as network segmentation, least-privilege IAM, Terraform planning, linting, and automated security checks.'
    ],
    tags: ['AWS', 'Terraform', 'Terratest', 'WireGuard', 'Caddy', 'GitHub Actions', 'Docker', 'Security'],
    type: 'work',
  },
  {
    title: 'Operations & Team Leadership (Multiple Roles)',
    org: 'Various (White Backshop, Lieferando, Tsakoudis Lebensmittel GmbH, Kita Sonnenbogen)',
    location: 'Berlin, Germany',
    period: 'Feb 2019 – Nov 2023',
    bullets: [
      'Led and coordinated daily operations under high-pressure, deadline-driven environments',
      'Optimized workflows and shift handovers to maintain reliability and service quality',
      'Developed transferable soft skills in communication, ownership, and structured problem solving',
    ],
    tags: ['Leadership', 'Operations', 'Communication', 'Process Improvement'],
    type: 'work',
  },
  {
    title: 'Software Engineering / Cloud Engineering Program',
    org: 'Masterschool GmbH',
    location: 'Berlin, Germany (Remote)',
    period: 'Jul 2024 – Sep 2025',
    bullets: [
      'Completed project-based program focused on Python, OOP, REST APIs, cloud architecture, and deployment practices',
      'Built production-style AWS environment (multi-AZ VPC, ASG, ALB, RDS replica, S3, CloudWatch alerts)',
      'Developed MovieLand (Flask + SQLAlchemy + OMDb API) with authentication, role-based access, and data integrity logic',
      'Practiced infrastructure as code (Terraform) and iterative environment validation to reduce configuration drift',
    ],
    tags: ['Python', 'Flask', 'Terraform', 'AWS', 'SQLAlchemy', 'Cloud Architecture'],
    type: 'education',
  },
  {
    title: 'Automations & Programming Studies',
    org: 'OSZ TIEM',
    location: 'Berlin, Germany',
    period: 'Sep 2017 – Dec 2018',
    bullets: [
      'Studied foundational programming (C++ / Java), embedded development (Arduino), and deployment fundamentals',
      'Built early problem-solving discipline and understanding of structured software design',
    ],
    tags: ['C++', 'Java', 'Embedded', 'Foundations'],
    type: 'education',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    org: 'Amazon Web Services',
    location: 'Certification',
    period: 'Aug 2025',
    bullets: [
      'Validated skill in designing resilient, secure, and cost-conscious AWS architectures',
    ],
    tags: ['AWS', 'Architecture', 'Security'],
    type: 'certification',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    location: 'Certification',
    period: 'Apr 2025',
    bullets: [
      'Established foundational cloud knowledge across core services, security, and billing models',
    ],
    tags: ['AWS', 'Foundations'],
    type: 'certification',
  },
];


