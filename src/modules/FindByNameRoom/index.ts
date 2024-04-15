import { PostgreeRoomRepository } from '../../Repository/Implementations/RoomRepository';
import { FindByNameRoomController } from './FindByNameRoomController';
import { FindByNameRoomUseCase } from './FindByNameRoomUseCase';

export const roomRepository = new PostgreeRoomRepository();
export const findByNameRoomUseCase = new FindByNameRoomUseCase(roomRepository);
export const findByNameRoomController = new FindByNameRoomController(findByNameRoomUseCase);