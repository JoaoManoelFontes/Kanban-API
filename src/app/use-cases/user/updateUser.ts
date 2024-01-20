import { UserRepository } from "../../repositories/userRepository"
import { UpdateUser, UserResponse } from "../../types/userTypes"
import { UserResponseSchema } from "../../types/userTypes"
import bcrypt from "bcrypt"

interface updateUserRequest {
    repository: UserRepository
    user: UpdateUser
    id: string
}

interface updateUserResponse {
    updatedUser: UserResponse
}

export async function updateUser({
    repository,
    user,
    id,
}: updateUserRequest): Promise<updateUserResponse> {
    const userExists = await repository.findById(id)

    if (user.password) {
        if (await bcrypt.compare(user.password, userExists.password)) {
            throw new Error("Password must be different")
        }
        user.password = bcrypt.hashSync(user.password, 10)
    }

    const updatedUser = UserResponseSchema.parse(
        await repository.update(id, user)
    )
    return { updatedUser }
}
