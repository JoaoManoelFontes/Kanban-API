import { InMemoryUserRepository } from "../../../database/inMemory/inMemoryUserRepository"
import { deleteUser } from "./deleteUser"
import { createUserFactory } from "../../factories/createUserFactory"

test("deleteUser", async () => {
    const repository = new InMemoryUserRepository()

    const { id, email } = await repository.create(createUserFactory())

    await deleteUser({
        userRepository: repository,
        id,
    })

    const user = await repository.findByEmail(email)
    expect(user).toBeNull()

    expect(repository.users.length).toEqual(0)
})

test("deleteUser with inexistent id", async () => {
    const repository = new InMemoryUserRepository()

    await repository.create(createUserFactory())

    await expect(
        deleteUser({
            userRepository: repository,
            id: "inexistent id",
        })
    ).rejects.toThrowError("User not found")
})
