import {Request, Response, NextFunction} from "express"
import { Repository } from "typeorm"
import AppDataSource from "../data-source"
import { Movie } from "../entities"
import { AppError } from "../errors"

const ensureMovieExistsMiddleware = async (request:Request, response:Response, next: NextFunction): Promise<void> => {

  const movieID:number = parseInt(request.params.id)

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const findMovie = await movieRepository.findOne({
    where:{
      id: movieID
    }
  })

  if(!findMovie){
    throw new AppError("Movie not found",404)
  }
  return next()
}

export default ensureMovieExistsMiddleware