import { Repository } from "typeorm"
import { Movie } from "../entities"
import AppDataSource from "../data-source"
import { movieSchema } from "../schemas"
import { iMovie } from "../interfaces"

const getMovieService = async (movieID:number):Promise<iMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const findMovie = await movieRepository.findOne({
    where: {
      id:movieID
    }
  })
  
  const movie = movieSchema.parse(findMovie)
  return movie
}

export default getMovieService