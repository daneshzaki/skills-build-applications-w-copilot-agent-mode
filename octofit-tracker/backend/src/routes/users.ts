import User from '../models/User.js';
import { createMongooseRouter } from './mongooseRoutes.js';

export default createMongooseRouter(User);
