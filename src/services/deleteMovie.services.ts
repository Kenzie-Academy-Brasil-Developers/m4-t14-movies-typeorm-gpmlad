import {AppDataSource} from "../data-source";
import { Movie } from "../entities";
import { Repository } from "typeorm";

const deleteMovieService = async(movieID:number): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const movie = await movieRepository.findOne({
    where:{
      id: movieID
    }
  })

  await movieRepository.remove(movie!)
}

export default deleteMovieService