import { Router } from "express"
import { createMovieController, deleteMovieController, getMovieController, getMoviesController, updateMovieController } from "../controllers"
import { ensureDataIsValidMiddleware, ensureMovieExistsMiddleware, ensureMovieNameIsAvaliableMiddleware } from "../middlewares"
import { movieCreateSchema,movieUpdateSchema} from "../schemas/index"

const movieRouter: Router = Router()

movieRouter.post("",ensureDataIsValidMiddleware(movieCreateSchema),ensureMovieNameIsAvaliableMiddleware,createMovieController)
movieRouter.get("",getMoviesController)
movieRouter.get("/:id",ensureMovieExistsMiddleware,getMovieController)
movieRouter.patch("/:id",ensureMovieExistsMiddleware,ensureDataIsValidMiddleware(movieUpdateSchema),ensureMovieNameIsAvaliableMiddleware,updateMovieController)
movieRouter.delete("/:id",ensureMovieExistsMiddleware, deleteMovieController)

export default movieRouter

