import { CreateRoomController } from './CreateRoomController';
import { CreateRoomUseCase } from './CreateRoomUseCase';
import { RoomRepository } from '../../Repository/Implementations/RoomRepository';

export const roomRepository = new RoomRepository();
export const createRoomUseCase = new CreateRoomUseCase(roomRepository);
export const createRoomController = new CreateRoomController(createRoomUseCase);