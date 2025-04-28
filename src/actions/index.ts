import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
  addRecipe: defineAction({
    accept: 'form',
    // input: z.any(),
    input: z.object({
      title: z.string().max(100)
    }),
    handler: async (input) => {
      console.log(input);

      return `Hello, ${input.title}!`
    },
  })
}
