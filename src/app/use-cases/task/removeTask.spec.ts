import { expect, test } from "vitest"
import { InMemoryTaskRepository } from "../../../database/inMemory/inMemoryTaskRepository"
import { removeTask } from "./removeTask"
import { createTaskFactory } from "../../factories/createTaskFactory"
import { createUserFactory } from "../../factories/createUserFactory"

test("Should remove a task", async () => {
    const repository = new InMemoryTaskRepository()

    const userId = createUserFactory().id

    const { id } = await repository.create(
        createTaskFactory({
            userId: userId,
        })
    )

    await removeTask({
        taskRepository: repository,
        id,
        userId: userId,
    })

    expect(repository.tasks).toEqual([])
})

test("Should not remove a task if user is not the owner", async () => {
    const repository = new InMemoryTaskRepository()

    const userId = createUserFactory().id

    const { id } = await repository.create(
        createTaskFactory({
            userId: userId,
        })
    )

    expect(
        async () =>
            await removeTask({
                taskRepository: repository,
                id,
                userId: "inexistent user id",
            })
    ).rejects.toThrowError("You can't delete this task")
})
