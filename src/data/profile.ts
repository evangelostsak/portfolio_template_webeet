export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Evangelos Tsakoudis",
  role: "Cloud & DevSecOps Engineer",
  summary:
    "Cloud & DevSecOps Engineer with AWS certification and hands-on experience automating infrastructure, secure delivery pipelines, and resilient backend workloads. I bridge infrastructure-as-code (Terraform), cloud architecture, and test automation (Terratest / CI) to ship reliable, observable systems—while continuously levelling up in scalability, security, and cost-aware design.",
  location: "Berlin, Germany",
  email: "baggtsak55@gmail.com",
  lookingFor: "Full-Time, Part-Time Roles",
  avatar: "/images/photo.png",
  resumeUrl: "/resume",
  skills: [
    // Core Cloud & Infra
    "AWS",
    "Terraform",
    "Infrastructure as Code (IaC)",
    // Languages & Backends
    "Python",
    "JavaScript",
    "Golang",
    // Containers / OS
    "Docker",
    "Linux",
    "Windows",
    // CI/CD & Automation
    "GitHub Actions",
    "CI/CD",
    "Automation",
    // Testing & Validation
    "Terratest",
    "Pytest",
    "Jest",
    // Security & Observability
    "IAM",
    "CloudWatch",
    "EventBridge",
    "Elastic Stack",
    // Data & APIs
    "Flask",
    "Django",
    "PostgreSQL",
    "SQL",
    "NoSQL",
    "API Design",
    // Collaboration / SCM
    "Git",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/evangelostsak" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/evangelos-tsakoudis" },
    { label: "Email", href: "mailto:baggtsak55@gmail.com" },
  ],
};
