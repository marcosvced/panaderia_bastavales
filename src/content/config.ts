import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
    schema: z.object({
        img: z.string(),        // URL de la imagen del producto
        price: z.string(),      // Precio del producto
        title: z.string(),      // Título del producto
        description: z.string() // Descripción del producto
    })
});

export const collections = {
    products: productsCollection,
};
