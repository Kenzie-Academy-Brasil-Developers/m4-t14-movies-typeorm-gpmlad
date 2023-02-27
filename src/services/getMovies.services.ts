import { Repository } from "typeorm"
import { Movie } from "../entities"
import {AppDataSource} from "../data-source"
import { allMoviesSchema } from "../schemas"
import { iMovies } from "../interfaces"

const getMoviesService = async (page:any, perPage:any, order: any, sort:any) => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

  const movieList: Array<Movie> = await movieRepository.find()
  

  let skip: number = parseInt(page) || 1
  let take: number = parseInt(perPage) || 5
  let movies

  if(skip < 1) {
    skip = 1
  }

  if(take > 5){
    take = 5
  } else if(take < 1) {
    take = 5
  }

  if(sort === "duration"){
    const findMovies: Array<Movie> = await movieRepository.find({
      take,
      skip: take * (skip - 1),
      order: {
        duration: order == "desc" ? "DESC" : "ASC"
      }
    })
    movies = allMoviesSchema.parse(findMovies)

  } else if(sort === "price"){
    const findMovies: Array<Movie> = await movieRepository.find({
      take,
      skip: take * (skip - 1),
      order: {
        price: order == "desc" ? "DESC" : "ASC"
      }
    })
    movies = allMoviesSchema.parse(findMovies)
    

  } else {
    const findMovies: Array<Movie> = await movieRepository.find({
      take,
      skip: take * (skip - 1),
      order: {
        id: "asc"
      }
    })
    movies = allMoviesSchema.parse(findMovies)
    
  }
  
  let count:number = movieList.length
  let data:Array<Movie> = movies
  let prevPage: string|null = `http://localhost:3000/movies?page=${skip-1}&perPage=${take}`
  let nextPage: string|null = `http://localhost:3000/movies?page=${skip+1}&perPage=${take}`

  if(skip === 1){
    prevPage = null
  }

  if(count < take * skip){
    nextPage = null
  }


  const moviesObject = {
    prevPage:prevPage,
    nextPage:nextPage,
    count: count,
    data: data
  }

  return moviesObject
}

export default getMoviesService