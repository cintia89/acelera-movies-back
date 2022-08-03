import {
  getMovie,
  getMovieId,
  getTODO,
  itsWorks,
  postMovie,
} from "@controllers/movie"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovie)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
}
