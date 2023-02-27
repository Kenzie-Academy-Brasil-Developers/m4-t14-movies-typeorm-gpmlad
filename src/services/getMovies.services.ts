import { Repository } from "typeorm"
import { Movie } from "../entities"
import AppDataSource from "../data-source"
import { allMoviesSchema } from "../schemas"
import { iMovies } from "../interfaces"

const getMoviesService = async ():Promise<iMovies> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const findMovies: Array<Movie> = await movieRepository.find()
  const movies = allMoviesSchema.parse(findMovies)
  return movies
}

export default getMoviesService