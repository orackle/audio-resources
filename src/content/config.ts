
import { defineCollection, z } from 'astro:content'

export const collections = {
  cards: defineCollection({
    schema: z.object({
      title: z.string().min(3),
      slug: z.string().regex(/^[a-z0-9-]+$/).optional(),
      category: z.enum(['Audio','Theory','DAWs','Workflows']),
      summary: z.string().min(10),
      level: z.enum(['Beginner','Intermediate','Pro']),
      tags: z.array(z.string()).default([]),

      actions: z.object({
        play: z.boolean().optional(),
        copy: z.boolean().optional(),
        like: z.boolean().optional()
      }).default({}),
      meta: z.object({
        instrument: z.string().optional(),
        genre: z.string().optional(),
        daw: z.string().optional(),
        process: z.string().optional()
      }).default({}),
      theory: z.object({
        key: z.string().optional(),
        scale_mode: z.string().optional(),
        progression: z.string().optional()
      }).default({}),
      metrics: z.object({
        bpm: z.string().optional(),
        lufs_target: z.string().optional()
      }).default({}),
      eq: z.object({
        low_hint: z.string().optional(),
        mid_hint: z.string().optional(),
        high_hint: z.string().optional()
      }).default({}),
      comp: z.object({
        ratio: z.string().optional(),
        attack_ms: z.string().optional(),
        release_ms: z.string().optional()
      }).default({}),
      
      related: z.array(z.string()).default([]),
      badges: z.array(z.string()).default([]),
      updated: z.string().optional()
    })
  })
}
