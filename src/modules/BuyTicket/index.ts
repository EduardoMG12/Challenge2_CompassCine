import { BuyTicketUseCase } from './BuyTicketUseCase';
import { BuyTicketController } from './BuyTicketController';
import { TicketRepository } from '../../Repository/Implementations/TicketRepository';
import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { RoomRepository } from '../../Repository/Implementations/RoomRepository';

export const ticketRepository = new TicketRepository();
export const sessionRepository = new  SessionRepository();
export const roomRepository = new RoomRepository();
export const buyTicketUseCase = new BuyTicketUseCase(ticketRepository,sessionRepository,roomRepository);
export const buyTicketController = new BuyTicketController(buyTicketUseCase);