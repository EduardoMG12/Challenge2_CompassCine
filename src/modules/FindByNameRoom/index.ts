import { RoomRepository } from '../../Repository/Implementations/RoomRepository';
import { FindByNameRoomController } from './FindByNameRoomController';
import { FindByNameRoomUseCase } from './FindByNameRoomUseCase';

export const roomRepository = new RoomRepository();
export const findByNameRoomUseCase = new FindByNameRoomUseCase(roomRepository);
export const findByNameRoomController = new FindByNameRoomController(findByNameRoomUseCase);