import { PostgreeTicketRepository } from '../../Repository/Implementations/TicketRepository';
import { FindAllTicketController } from './FindAllTicketController';
import { FindAllTicketUseCase } from './FindAllTicketUseCase';

export const ticketRepository = new PostgreeTicketRepository();
export const findAllTicketUsecase = new FindAllTicketUseCase(ticketRepository);
export const findAllTicketController = new FindAllTicketController(findAllTicketUsecase);