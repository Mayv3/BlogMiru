import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: z.object({
        title: z.string().min(5, "El título debe tener al menos 5 caracteres"),
        description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
        pubDate: z.string().refine(date => !isNaN(Date.parse(date)), { message: "Debe ser una fecha válida" }),
        author: z.string().default("Anónimo"),
        tags: z.array(z.string()).default([]),
        image: z.string().optional(), 
        draft: z.boolean().default(false),
        readingTime: z.number().positive().optional(), 
    })
});

export const collections = { posts };
