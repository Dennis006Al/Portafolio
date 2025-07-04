import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    year: z.number(),
    image: z.string(),
  }),
});

export const collections = {
  projects,
};
