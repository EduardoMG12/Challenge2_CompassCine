import { BuyTicketUseCase } from './BuyTicketUseCase';
import { BuyTicketController } from './BuyTicketController';
import { PostgreeTicketRepository } from '../../Repository/Implementations/PostgreeTicketRepository';
import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { PostgreeRoomRepository } from '../../Repository/Implementations/PostgreRoomRepository';

export const postgreeTicketRepository = new PostgreeTicketRepository();
export const postgresSessionRepository = new  PostgresSessionRepository();
export const postgreeRoomRepository = new PostgreeRoomRepository();
export const buyTicketUseCase = new BuyTicketUseCase(postgreeTicketRepository,postgresSessionRepository,postgreeRoomRepository);
export const buyTicketController = new BuyTicketController(buyTicketUseCase);