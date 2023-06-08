import { Request, Response } from "express"
import { PrismaUserRepository } from "../../database/prisma/prismaUserRepository"
import { createUser } from "../../app/use-cases/user/createUser"
import { userAuthentication } from "../../app/use-cases/user/userAuthentication"
import { deleteUser } from "../../app/use-cases/user/deleteUser"
import { updateUser } from "../../app/use-cases/user/updateUser"
import { findUser } from "../../app/use-cases/user/findUser"
import { ZodIssue } from "zod"

const repository = new PrismaUserRepository()

export async function create({ body }: Request, res: Response) {
    const user = await createUser(repository, body)

    if (user instanceof Array<ZodIssue>) {
        return res.status(400).json({ message: "Invalid data", issues: user })
    }

    if (user instanceof Error) {
        return res.status(400).json({ error: user.message })
    }

    return res.status(201).json(user)
}

export async function auth({ body }: Request, res: Response) {
    const token = await userAuthentication(repository, body)

    if (token instanceof Array<ZodIssue>) {
        return res.status(400).json({ message: "Invalid data", issues: token })
    }

    if (token instanceof Error) {
        return res.status(400).json({ error: token.message })
    }
    return res.status(200).json(token)
}

export async function exclude(req: Request, res: Response) {
    const user = await deleteUser(repository, req.sub)

    if (user instanceof Error) {
        return res.status(400).json({ error: user.message })
    }

    return res.status(204).json({ message: "User deleted" })
}

export async function update(req: Request, res: Response) {
    const user = await updateUser({
        repository,
        id: req.sub,
        user: req.body,
    })

    if (user instanceof Error) {
        return res.status(400).json({ error: user.message })
    }

    if (user instanceof Array<ZodIssue>) {
        return res.status(400).json({ message: "Invalid data", issues: user })
    }

    return res.status(200).json(user)
}

export async function detail(req: Request, res: Response) {
    const user = await findUser(repository, req.sub)

    if (user instanceof Error) {
        return res.status(404).json({ error: user.message })
    }

    return res.status(200).json(user)
}
