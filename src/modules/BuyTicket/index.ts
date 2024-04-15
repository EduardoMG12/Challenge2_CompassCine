import { BuyTicketUseCase } from './BuyTicketUseCase';
import { BuyTicketController } from './BuyTicketController';
import { TicketRepository } from '../../Repository/Implementations/TicketRepository';
import { ReferenceRepository } from '../../Repository/Implementations/ReferencesRepository';
import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { RoomRepository } from '../../Repository/Implementations/RoomRepository';

export const referenceRepository = new ReferenceRepository()
export const ticketRepository = new TicketRepository();
export const sessionRepository = new  SessionRepository();
export const roomRepository = new RoomRepository();
export const buyTicketUseCase = new BuyTicketUseCase(ticketRepository,sessionRepository,roomRepository,referenceRepository);
export const buyTicketController = new BuyTicketController(buyTicketUseCase);