/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreatMovieDTO } from '../DTO/CreateMovieDTO';
import { Movie } from '../models/movies';

export interface IMovieRepository{
    findByName(nome: string): Promise<any>;
    findByAll(): Promise<any>
    save(filme: ICreatMovieDTO): Promise<typeof Movie | null>;
    findById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
    repository(): Promise<any>
}