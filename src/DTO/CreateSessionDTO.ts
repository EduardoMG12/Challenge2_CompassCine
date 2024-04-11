import { Filme, Ingresso, Sala } from '@prisma/client';

export interface ICreateSessionDTO {
    horario:Date
    filme: Filme
    sala:Sala 
    ingressos:Ingresso[]
    filmeId:string
    salaId:string
}