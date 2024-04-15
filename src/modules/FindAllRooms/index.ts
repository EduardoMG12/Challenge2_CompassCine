import { RoomRepository } from '../../Repository/Implementations/RoomRepository';
import { SessionRepository } from '../../Repository/Implementations/SessionRepository';
import { FindAllRoomsController } from './FindAllRoomsController';
import { FindAllRoomsUseCase } from './FindAllRoomsUseCase';

export const sessaoRepository = new SessionRepository();
export const roomRepository = new RoomRepository();
export const findAllRoomUseCase = new FindAllRoomsUseCase(roomRepository, sessaoRepository);
export const findAllRoomController = new FindAllRoomsController(findAllRoomUseCase);