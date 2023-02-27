import {Request, Response, NextFunction} from "express"
import { Repository } from "typeorm"
import {AppDataSource} from "../data-source"
import { Movie } from "../entities"
import { AppError } from "../errors"

const ensureMovieNameIsAvaliableMiddleware = async (request:Request, response:Response, next: NextFunction): Promise<void> => {

  const movieName:string = request.body.name

  if(!movieName){
    return next()
  }

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const findUser = await movieRepository.findOne({
    where:{
      name: movieName
    }
  })

  if(!findUser){
    return next()
  }
  throw new AppError("Movie already exists.",409)
}

export default ensureMovieNameIsAvaliableMiddleware