import { Filme, PrismaClient } from '@prisma/client';
import { ICreatMovieDTO } from '../DTO/CreateMovieDTO';


export interface IMovieRepository{
    findByName(nome: string): Promise<Filme>;
    findByAll(): Promise<Filme[]>
    save(filme: ICreatMovieDTO): Promise<Filme>;
    findById(id: number): Promise<Filme>;
    delete(id: string): Promise<Filme>;
    repository(): Promise<PrismaClient>
}