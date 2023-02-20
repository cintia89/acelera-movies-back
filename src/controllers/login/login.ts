import { User } from "@models/entity/users"
import { getRepository } from "typeorm"
import md5 from "md5"

export const postLogin = async (request, response) => {
  try {
    const baseAuth = request.headers.authorization.split(" ")[1]
    const encoded = Buffer.from(baseAuth, "base64")
    const [email, password] = encoded.toString("utf-8").split(":")

    const userRepository = getRepository(User)
    const user = await userRepository.findOne({ where: { email } })

    if (!user || md5(password) !== user.password) {
      return response.status(404).json({ mesage: "login invalido!" })
    } else if (email === user.email && md5(password) === user.password) {
      return response.status(200).json({ mesage: "login valido!" })
    }
  } catch (error) {
    return response.status(500).json(error)
  }
}
