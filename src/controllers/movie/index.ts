import { Movie } from "@models/entity/Movie"
import { response } from "express"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovie = async (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const movies = await movieRepository.find()
    return response.status(200).json(movies)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMovieId = async (request, response) => {
  try {
    const idRepository = getRepository(Movie)
    const getId = await idRepository.findOne(request.params)
    return response.status(200).json(getId)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postMovie = async (request, response) => {
  const movieRepository = getRepository(Movie)
  const movie = request.body
  const saveMovie = await movieRepository.save(movie)

  return response.json(saveMovie)
}
