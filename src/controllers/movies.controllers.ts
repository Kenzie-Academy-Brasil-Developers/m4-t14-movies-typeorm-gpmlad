import { Request, Response} from "express"
import { iMovieCreate } from "../interfaces"
import { createMovieService, deleteMovieService, getMovieService, getMoviesService, updateMovieService } from "../services"

const createMovieController = async(request: Request, response:Response):Promise<Response> => {

  const userData: iMovieCreate = request.body

  const newMovie = await createMovieService(userData)

  return response.status(201).json(newMovie)
}

const getMovieController = async(request: Request, response:Response):Promise<Response> => {
  const movieID: number = parseInt(request.params.id)
  const movie = await getMovieService(movieID)
  return response.status(200).json(movie)
}

const getMoviesController = async(request: Request, response:Response): Promise<Response> => {
  const {page, perPage, sort, order} = request.query
  const movies = await getMoviesService(page, perPage, order, sort)
  return response.status(200).json(movies)
}

const updateMovieController = async(request: Request, response:Response) => {
  const user = await updateMovieService(request.body, parseInt(request.params.id))
  return response.status(200).json(user)
  
}

const deleteMovieController = async(request: Request, response:Response) => {
  const movieID: number = parseInt(request.params.id)
  await deleteMovieService(movieID)

  return response.status(204).json()
}

export {
  createMovieController,
  getMovieController,
  getMoviesController,
  updateMovieController,
  deleteMovieController
} 