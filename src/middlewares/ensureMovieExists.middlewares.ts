import {Request, Response, NextFunction} from "express"

const ensureMovieExistsMiddleware = async (request:Request, response:Response, next: NextFunction): Promise<void> => {

  const movieID:number = parseInt(request.params.id)

  return next()
}

export default ensureMovieExistsMiddleware