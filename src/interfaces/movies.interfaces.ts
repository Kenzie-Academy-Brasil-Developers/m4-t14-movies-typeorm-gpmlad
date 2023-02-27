import { DeepPartial, Repository } from "typeorm"
import { z } from "zod"
import { Movie } from "../entities"
import {
  allMoviesSchema,
  movieCreateSchema,
  movieSchema,
  movieUpdateSchema
} from "../schemas"

type iMovie = z.infer<typeof movieSchema>
type iMovies = z.infer<typeof allMoviesSchema>
type iMovieCreate = z.infer<typeof movieCreateSchema>
type iMovieUpdate = DeepPartial<iMovieCreate>
type iMovieRepo = Repository<Movie>;

export {
  iMovie,
  iMovieCreate,
  iMovies,
  iMovieUpdate,
  iMovieRepo
}