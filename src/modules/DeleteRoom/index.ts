import { PostgreeRoomRepository } from '../../Repository/Implementations/PostgreRoomRepository';
import { DeleteRoomController } from './DeleteRoomController';
import { DeleteRoomUseCase } from './DeleteRoomUseCase';

export const RepositoryRoom = new PostgreeRoomRepository();
export const deleteRoomUseCase = new DeleteRoomUseCase(RepositoryRoom);
export const deleteRoomController = new DeleteRoomController(deleteRoomUseCase);