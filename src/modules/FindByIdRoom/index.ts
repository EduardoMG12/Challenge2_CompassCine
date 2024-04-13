import { PostgreeRoomRepository } from '../../Repository/Implementations/PostgreRoomRepository';
import { FindByIdRoomController } from './FindByIdRoomController';
import { FindByIdRoomuseCase } from './FindByIdRoomUseCase';

export const roomRepository = new PostgreeRoomRepository();
export const findByIdRoomUseCase = new FindByIdRoomuseCase(roomRepository);
export const findByIdRoomController = new FindByIdRoomController(findByIdRoomUseCase);