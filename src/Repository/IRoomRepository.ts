import { PrismaClient, Sala } from '@prisma/client';
import { ICreateRoom } from '../DTO/CreateRoomDTO';


export interface IRoomRepository{
    findByName(nome: string): Promise<Sala | null>;
    findByAll(): Promise<Sala[]>
    save(sala: ICreateRoom): Promise<Sala>;
    findById(id: string): Promise<Sala | null>;
    delete(id: string): Promise<Sala>;
    repository(): Promise<PrismaClient>
}