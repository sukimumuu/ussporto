import { StaticImageData } from "next/image";
import { project_laravel } from "./project_laravel";
import { project_html } from "./project_html";
import { project_unity } from "./project_unity";

export type ProjectCategory = "all" | "laravel" | "unity" | "html";

export interface UnifiedProject {
  id: string;
  category: "laravel" | "unity" | "html";
  categoryName: string;
  categoryBadge: string;
  imgSrc: StaticImageData;
  alt: string;
  title: string;
  link: string;
  date: string;
  description: string;
  roles: string[];
  note: string;
  featured?: boolean;
}

export const allProjects: UnifiedProject[] = [
  // Laravel Projects
  ...project_laravel.map((p, idx) => ({
    ...p,
    id: `laravel-${idx}-${p.alt}`,
    category: "laravel" as const,
    categoryName: "Laravel & Backend",
    categoryBadge: "WARTA LARAVEL",
    featured: idx === 0 || idx === 5, // melesat & lumbungdata as featured
  })),
  // Unity Projects
  ...project_unity.map((p, idx) => ({
    ...p,
    id: `unity-${idx}-${p.alt}`,
    category: "unity" as const,
    categoryName: "Unity & Game Dev",
    categoryBadge: "EKSPERIMEN GAME",
    featured: true,
  })),
  // HTML Projects
  ...project_html.map((p, idx) => ({
    ...p,
    id: `html-${idx}-${p.alt}`,
    category: "html" as const,
    categoryName: "Web & Landing Page",
    categoryBadge: "ARSIP WEB",
    featured: false,
  })),
];
