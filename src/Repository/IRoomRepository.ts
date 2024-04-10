import { PrismaClient, Sala } from '@prisma/client';
import { ICreateRoom } from '../DTO/CreateRoomDTO';


export interface IRoomRepository{
    findByName(nome: string): Promise<Sala | null>;
    findByAll(): Promise<Sala[]>
    save(sala: ICreateRoom): Promise<Sala>;
    findById(id: number): Promise<Sala | null>;
    delete(id: number): Promise<Sala>;
    repository(): Promise<PrismaClient>
}