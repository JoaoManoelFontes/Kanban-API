import { UserRepository } from "../../repositories/userRepository"
import { UserResponse } from "../../types/userTypes"
import { UserResponseSchema } from "../../types/userTypes"

interface findUserRequest {
    userRepository: UserRepository
    id: string
}

interface findUserResponse {
    user: UserResponse
}

export async function findUser({
    userRepository: repository,
    id,
}: findUserRequest): Promise<findUserResponse> {
    const user = UserResponseSchema.parse(await repository.findById(id))
    return { user }
}
