import { PostgreeRoomRepository } from '../../Repository/Implementations/PostgreRoomRepository';
import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { PostgreeTicketRepository } from '../../Repository/Implementations/PostgreeTicketRepository';
import { FindAllRoomsController } from './FindAllRoomsController';
import { FindAllRoomsUseCase } from './FindAllRoomsUseCase';

export const postgreeTicketRepository = new PostgreeTicketRepository()
export const sessaoRepository = new PostgresSessionRepository();
export const roomRepository = new PostgreeRoomRepository();
export const findAllRoomUseCase = new FindAllRoomsUseCase(roomRepository,sessaoRepository, postgreeTicketRepository);
export const findAllRoomController = new FindAllRoomsController(findAllRoomUseCase);