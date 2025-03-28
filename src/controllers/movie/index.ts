import { Movie } from "@models/entity/Movie"
import { response } from "express"
import { getRepository } from "typeorm"

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
  try {
    const movieRepository = getRepository(Movie)
    const movie = movieRepository.create(request.body)
    await movieRepository.save(movie)

    return response.status(200).json({ mesage: "sucesso" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const deleteMovie = async (request, response) => {
  const { id } = request.params
  const deletRepository = getRepository(Movie)
  const deletMovie = await deletRepository.delete(id)

  return response.json(deletMovie)
}

export const putMovie = async (request, response) => {
  const { id } = request.params
  const body = request.body
  const putRepository = getRepository(Movie)
  const putMovieId = await putRepository.update(id, body)

  return response.json(putMovieId)
}
