import { getRepository } from "typeorm"
import md5 from "md5"
import { User } from "@models/entity/users"

export const createUser = async (request, response) => {
  try {
    const requestBody = request.body
    requestBody.password = md5(requestBody.password)
    const userRepository = getRepository(User)
    const newUser = userRepository.create(requestBody)
    await userRepository.save(newUser)

    return response.status(200).json({ mesage: "sucesso" })
  } catch (error) {
    return response.status(500).json(error)
  }
}
