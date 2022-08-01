import { Movie } from "@models/entity/Movie"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovie = (request, response) => {
  const movieRepository = getRepository(Movie)
  console.log(movieRepository)
  return response.json({ movie: [] })
}
