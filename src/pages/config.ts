import { defineCollection, z } from 'astro:content';

const langObject = z.object({
  en: z.string(),
  es: z.string(),
});

const projects = defineCollection({
  schema: z.object({
    slug: z.string(),
    status: z.enum(['published', 'wip']),
    url: z.string().optional(),
    year: z.number(),
    image: z.string(),
    featuredImage: z.string().optional(),
    title: langObject,
    description: langObject,
    details: z.object({
      overview: langObject,
      objective: langObject,
      techStack: z.array(z.string()),
      contributions: z.object({
        en: z.array(z.string()),
        es: z.array(z.string()),
      }),
      reflection: langObject,
    }),
  }),
});

export const collections = {
  projects,
};
