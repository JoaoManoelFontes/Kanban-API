import { TaskRepository } from "../../repositories/taskRepository"

interface removeTaskRequest {
    taskRepository: TaskRepository
    id: string
    userId: string
}

export async function removeTask({
    taskRepository,
    id,
    userId,
}: removeTaskRequest): Promise<void> {
    const task = await taskRepository.findById(id)
    if (userId !== task.userId) throw new Error("You can't delete this task")

    await taskRepository.delete(id)
}
