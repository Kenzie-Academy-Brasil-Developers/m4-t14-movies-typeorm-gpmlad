import { Repository } from "typeorm"
import AppDataSource from "../data-source"
import { iMovie, iMovieUpdate } from "../interfaces"
import { Movie } from "../entities"
import { movieSchema } from "../schemas"

const updateMovieService = async(movieData: iMovieUpdate, movieID:number):Promise<iMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const oldMovieData = await movieRepository.findOne({
    where: {
      id: movieID
    }
  })

  const movie = movieRepository.create({
    ...oldMovieData, ...movieData
  })

  await movieRepository.save(movie)

  const updatedMovie = movieSchema.parse(movie) 

  return updatedMovie

}

export default updateMovieService