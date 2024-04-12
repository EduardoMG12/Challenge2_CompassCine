/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICreateRoom } from '../DTO/CreateRoomDTO';


export interface IRoomRepository{
    findByName(nome: string): Promise<any>;
    findByAll(): Promise<any[]>
    save(sala: ICreateRoom): Promise<any>;
    findById(id: string): Promise<any>;
    delete(id: string): Promise<any>;
    repository(): Promise<any>
}