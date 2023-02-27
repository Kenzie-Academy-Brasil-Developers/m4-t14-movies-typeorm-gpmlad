import { iMovie, iMovieCreate } from "../interfaces";
import AppDataSource from "../data-source";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { movieSchema } from "../schemas";

const createMovieService = async(movieData: iMovieCreate):Promise<iMovie> => {

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
  const movie: Movie = movieRepository.create(movieData)

  await movieRepository.save(movie)

  const newMovie = movieSchema.parse(movie)

  return newMovie
}

export default createMovieService