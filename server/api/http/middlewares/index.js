import {authMiddlewareFactory} from './auth.middleware.js';
import {usersUseCase} from '../../../use-cases/index.js';

export const authMiddleware = authMiddlewareFactory({usersUseCase});