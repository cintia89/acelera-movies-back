export const postLogin = (request, response) => {
  const { email, password } = request.body

  if (email === "test" && password === "1234") {
    return response.json({ mesage: "login correto!" })
  }
  return response.json({ mesage: "login invalido!" })
}
//não foi necessario criar entidades pois criamos login fixo
