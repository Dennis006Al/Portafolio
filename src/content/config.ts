import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // ...otros campos
  }),
});

export const collections = {
  es: blogCollection,
  en: blogCollection,
};
