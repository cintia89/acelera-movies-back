import {
  deleteMovie,
  getMovie,
  getMovieId,
  getTODO,
  itsWorks,
  postMovie,
  putMovie,
} from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovie)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
  app.delete("/movie/:id", deleteMovie)
  app.put("/movie/:id", putMovie)
}
