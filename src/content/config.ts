import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    author: z.string().default('Jindequan'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    color: z.string().default('#00ff00'),
    heroImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = {
  blog,
};