import { Request, Response} from "express"
import { iMovieCreate } from "../interfaces"
import { createMovieService, getMoviesService } from "../services"

const createMovieController = async(request: Request, response:Response):Promise<Response> => {

  const userData: iMovieCreate = request.body

  const newMovie = await createMovieService(userData)

  return response.status(201).json(newMovie)
}

const getMovieController = async(request: Request, response:Response) => {
  
  return response.json()
}

const getMoviesController = async(request: Request, response:Response): Promise<Response> => {
  console.log('Entrei')
  const movies = await getMoviesService()
  return response.status(200).json(movies)
}

const updateMovieController = async(request: Request, response:Response) => {
  return response.json()
}

const deleteMovieController = async(request: Request, response:Response) => {
  return response.json()
}

export {
  createMovieController,
  getMovieController,
  getMoviesController,
  updateMovieController,
  deleteMovieController
} 