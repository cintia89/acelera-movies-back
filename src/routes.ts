import { postLogin } from "@controllers/login/login"
import {
  deleteMovie,
  getMovie,
  getMovieId,
  postMovie,
  putMovie,
} from "@controllers/movie"
import { createUser } from "@controllers/users"

export const defineRoutes = (app) => {
  app.get("/movie", getMovie)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
  app.delete("/movie/:id", deleteMovie)
  app.put("/movie/:id", putMovie)

  app.post("/login", postLogin)
  app.post("/users", createUser)
}
