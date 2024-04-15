import { PostgreeRoomRepository } from '../../Repository/Implementations/RoomRepository';
import { FindAllRoomsController } from './FindAllRoomsController';
import { FindAllRoomsUseCase } from './FindAllRoomsUseCase';

export const roomRepository = new PostgreeRoomRepository();
export const findAllRoomUseCase = new FindAllRoomsUseCase(roomRepository);
export const findAllRoomController = new FindAllRoomsController(findAllRoomUseCase);