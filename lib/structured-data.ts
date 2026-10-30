import { education, portfolio, projects, skillCategories } from "@/lib/portfolio";
import { siteConfig } from "@/lib/metadata";

function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

const roleSkills = skillCategories.flatMap((category) => [
  category.name,
  ...category.skills,
]);

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-IN",
} as const;

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.url}/about#vraj-patel`,
    name: portfolio.person.name,
    jobTitle: siteConfig.roleSummary,
    url: siteConfig.url,
    image: absoluteUrl(portfolio.person.portrait),
    email: portfolio.person.email,
    telephone: portfolio.person.phone,
    description: portfolio.about,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
    sameAs: [
      portfolio.person.github,
      portfolio.person.linkedin,
      portfolio.person.leetcode,
    ],
    knowsAbout: roleSkills,
    alumniOf: education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: entry.school,
    })),
  },
} as const;

export const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Vraj Patel AI, Data Science, and Full Stack Projects",
  description:
    "Selected production-oriented AI systems, data science projects, and full stack engineering work by Vraj Patel.",
  url: absoluteUrl("/projects"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.githubUrl,
        author: {
          "@type": "Person",
          name: portfolio.person.name,
          url: siteConfig.url,
        },
        keywords: project.stack.join(", "),
      },
    })),
  },
} as const;
