/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreatMovieDTO } from '../DTO/CreateMovieDTO';


export interface IMovieRepository{
    findByName(nome: string): Promise<any>;
    findByAll(): Promise<any>
    save(filme: ICreatMovieDTO): Promise<any>;
    findById(id: string): Promise<any>;
    delete(id: string): Promise<void>;
    repository(): Promise<any>
}