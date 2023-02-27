import { z } from "zod"
import {
  allMoviesSchema,
  movieCreateSchema,
  movieSchema,
  movieUpdateSchema
} from "../schemas"

type iMovie = z.infer<typeof movieSchema>
type iMovies = z.infer<typeof allMoviesSchema>
type iMovieCreate = z.infer<typeof movieCreateSchema>
type iMovieUpdate = z.infer<typeof movieUpdateSchema>

export {
  iMovie,
  iMovieCreate,
  iMovies,
  iMovieUpdate
}