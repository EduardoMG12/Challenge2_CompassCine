import { CreateRoomController } from './CreateRoomController';
import { CreateRoomUseCase } from './CreateRoomUseCase';
import { PostgreeRoomRepository } from '../../Repository/Implementations/RoomRepository';

export const postgreeRoomRepository = new PostgreeRoomRepository();
export const createRoomUseCase = new CreateRoomUseCase(postgreeRoomRepository);
export const createRoomController = new CreateRoomController(createRoomUseCase);