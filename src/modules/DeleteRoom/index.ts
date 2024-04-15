import { RoomRepository } from '../../Repository/Implementations/RoomRepository';
import { DeleteRoomController } from './DeleteRoomController';
import { DeleteRoomUseCase } from './DeleteRoomUseCase';

export const RepositoryRoom = new RoomRepository();
export const deleteRoomUseCase = new DeleteRoomUseCase(RepositoryRoom);
export const deleteRoomController = new DeleteRoomController(deleteRoomUseCase);