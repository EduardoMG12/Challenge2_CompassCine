import { TicketRepository } from '../../Repository/Implementations/TicketRepository';
import { FindAllTicketController } from './FindAllTicketController';
import { FindAllTicketUseCase } from './FindAllTicketUseCase';

export const ticketRepository = new TicketRepository();
export const findAllTicketUsecase = new FindAllTicketUseCase(ticketRepository);
export const findAllTicketController = new FindAllTicketController(findAllTicketUsecase);