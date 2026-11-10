import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      year: z.number(),
      order: z.number().default(99),
      featured: z.boolean().default(false),
      role: z.string().optional(),
      summary: z.string(),
      outcome: z.string(),
      tags: z.array(z.string()),
      kind: z.enum(['mobile', 'web', 'design']),
      device: z.enum(['phone', 'watch']).default('phone'),
      links: z
        .object({
          live: z.string().url().optional(),
          github: z.string().url().optional(),
          figma: z.string().url().optional(),
        })
        .default({}),
      cover: image(),
      images: z.array(image()).default([]),
    }),
});

export const collections = { projects };
