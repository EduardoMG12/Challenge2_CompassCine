import { RoomRepository } from '../../Repository/Implementations/RoomRepository';
import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { TicketRepository } from '../../Repository/Implementations/TicketRepository';
import { FindAllRoomsController } from './FindAllRoomsController';
import { FindAllRoomsUseCase } from './FindAllRoomsUseCase';

export const ticketRepository = new TicketRepository();
export const sessaoRepository = new SessionRepository();
export const roomRepository = new RoomRepository();
export const findAllRoomUseCase = new FindAllRoomsUseCase(roomRepository,sessaoRepository, ticketRepository);
export const findAllRoomController = new FindAllRoomsController(findAllRoomUseCase);