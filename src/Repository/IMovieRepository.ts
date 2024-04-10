import { Filme, PrismaClient } from '@prisma/client';
import { ICreatMovieDTO } from '../DTO/CreateMovieDTO';


export interface IMovieRepository{
    findByName(nome: string): Promise<Filme>;
    findByAll(): Promise<Filme[]>
    save(filme: ICreatMovieDTO): Promise<Filme>;
    findById(id: string): Promise<Filme>;
    delete(id: string): Promise<void>;
    repository(): Promise<PrismaClient>
}