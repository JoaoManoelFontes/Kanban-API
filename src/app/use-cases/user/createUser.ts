import { UserResponse, User } from "../../types/userTypes"
import { UserRepository } from "../../repositories/userRepository"
import { UserResponseSchema } from "../../types/userTypes"

interface createUserRequest {
    userRepository: UserRepository
    user: User
}

interface createUserResponse {
    createdUser: UserResponse
}

export async function createUser({
    userRepository,
    user,
}: createUserRequest): Promise<createUserResponse> {
    const userExist = await userRepository.findByEmail(user.email)

    if (userExist) {
        throw new Error("User already exists")
    }
    const createdUser = UserResponseSchema.parse(
        await userRepository.create(user)
    )
    return { createdUser }
}
