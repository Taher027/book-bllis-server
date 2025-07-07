// productValidation.ts
import { z } from 'zod';

const productZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publication: z.string({
      required_error: 'Publication is required',
    }),
    price: z.number().optional(),
    sellPrice: z.number({
      required_error: 'Sell Price is required',
    }),
    imageUrl: z.string({
      required_error: 'Image URL is required',
    }),
    shortDescription: z.string({
      required_error: 'Short description is required',
    }),
    longDescription: z.string().optional(),
  }),
});

export const productValidation = {
  productZodSchema,
};
