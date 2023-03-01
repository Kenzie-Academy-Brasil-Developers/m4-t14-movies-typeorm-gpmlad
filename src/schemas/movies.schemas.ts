import { z } from "zod"

const movieSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().positive().int()
})

const movieCreateSchema = movieSchema.omit({
  id: true
})

const movieUpdateSchema = movieCreateSchema.partial()

const allMoviesSchema = z.array(movieSchema)

export {
  movieSchema,
  movieCreateSchema,
  movieUpdateSchema,
  allMoviesSchema
}