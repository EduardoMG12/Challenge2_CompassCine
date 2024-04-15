import { PostgreeRoomRepository } from '../../Repository/Implementations/PostgreRoomRepository';
import { PostgresSessionRepository } from '../../Repository/Implementations/PostgresSessionRepository';
import { FindAllRoomsController } from './FindAllRoomsController';
import { FindAllRoomsUseCase } from './FindAllRoomsUseCase';

export const sessaoRepository = new PostgresSessionRepository();
export const roomRepository = new PostgreeRoomRepository();
export const findAllRoomUseCase = new FindAllRoomsUseCase(roomRepository,sessaoRepository);
export const findAllRoomController = new FindAllRoomsController(findAllRoomUseCase);