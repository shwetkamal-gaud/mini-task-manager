import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } })
        res.status(200).json(tasks)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

export const getSingleTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id)
      
        const task = await prisma.task.findUnique({ where: { id } })
        if (!task) {
            res.status(404).json({ message: 'Task not found' })
            return
        }
        res.status(200).json(task)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, status } = req.body
        const task = await prisma.task.create({ data: { title, status } })
        res.status(201).json(task)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const id  = parseInt(req.params.id)
        const { title, status } = req.body;
        const updated = await prisma.task.update({ where: { id }, data: { title, status } });
        if (!updated) {
            res.status(404).json({ message: 'Task not found' })
            return
        }
        res.json(updated);

    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.id)
       
        await prisma.task.delete({ where: { id } });
        res.status(204).end();

    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}